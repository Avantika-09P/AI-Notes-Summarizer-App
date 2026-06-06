const express = require("express");
const router = express.Router();

const OpenAI = require("openai");

const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const path = require("path");
const os = require("os");
const https = require("https");

// =====================================
// MULTER STORAGE (WINDOWS SAFE)
// =====================================

const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, os.tmpdir());

  },

  filename: function (req, file, cb) {

    cb(
      null,
      Date.now() +
      path.extname(file.originalname)
    );

  },

});

const upload = multer({
  storage,
});

// =====================================
// OPENROUTER CLIENT
// =====================================

const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error(
    "Missing API key: set OPENROUTER_API_KEY (or OPENAI_API_KEY). Requests to the OpenRouter API will fail with 401."
  );
}

const client = new OpenAI({
  apiKey,
  baseURL: "https://openrouter.ai/api/v1",
});

// Helper: call OpenRouter directly using Node https to ensure Authorization header is sent
function callOpenRouterChat(messages, model = "openrouter/auto") {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ model, messages });

    // Debug: log masked request info
    try {
      const maskedKey = apiKey ? `${apiKey.slice(0, 4)}... (len=${apiKey.length})` : "<missing>";
      console.log(`OpenRouter request -> model=${model} messages=${messages.length} apiKey=${maskedKey}`);
    } catch (e) {
      console.log("OpenRouter request -> (unable to compute masked key)");
    }

    const options = {
      hostname: "openrouter.ai",
      port: 443,
      path: "/api/v1/chat/completions",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
        Authorization: `Bearer ${apiKey}`,
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        let parsed;
        try {
          parsed = JSON.parse(data || "{}");
        } catch (e) {
          console.error("OpenRouter response parse error:", e, "raw:", data);
          return reject(new Error("Invalid JSON response from OpenRouter"));
        }

        console.log(`OpenRouter response status=${res.statusCode} body=${data.substring(0, 1000)}`);

        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          return resolve(parsed);
        }

        const msg = parsed?.error?.message || `OpenRouter error ${res.statusCode}`;
        const err = new Error(msg);
        err.response = parsed;
        err.status = res.statusCode;
        return reject(err);
      });
    });

    req.on("error", (err) => reject(err));
    req.write(postData);
    req.end();
  });
}

// =====================================
// TEST ROUTE
// =====================================

router.get("/", (req, res) => {

  res.json({
    message: "AI Routes Working 🚀",
  });

});

// =====================================
// PDF SUMMARY ROUTE
// =====================================

router.post(

  "/summarize",

  upload.single("pdf"),

  async (req, res) => {

    try {

      // CHECK FILE
      if (!req.file) {

        return res.status(400).json({
          message: "PDF file is required",
        });

      }

      console.log("✅ FILE RECEIVED:");
      console.log(req.file);

      // READ PDF FILE
      const dataBuffer =
        fs.readFileSync(req.file.path);

      // EXTRACT PDF TEXT
      const pdfData =
        await pdfParse(dataBuffer);

      const extractedText =
        pdfData.text;

      console.log("✅ EXTRACTED TEXT:");
      console.log(extractedText);

      // CHECK EMPTY TEXT
      if (!extractedText ||
          extractedText.trim() === "") {

        return res.status(400).json({

          message:
            "No readable text found in PDF",

        });

      }

      // SEND TO AI
      if (!apiKey) {
        return res.status(500).json({
          message:
            "Server misconfigured: missing OPENROUTER_API_KEY environment variable.",
        });
      }

      const completion = await callOpenRouterChat(
        [
          { role: "system", content: "You are an AI study assistant." },
          {
            role: "user",
            content: `Summarize these notes into easy bullet points:\n\n${extractedText}`,
          },
        ],
        "openrouter/auto"
      );

      const finalText =
        completion.choices[0].message.content;

      // RESPONSE
      res.json({

        message:
          "PDF summarized successfully",

        result:
          finalText,

      });

    } catch (error) {

      console.log("❌ PDF SUMMARY ERROR:");

      console.log(error);

      res.status(500).json({

        message:
          "PDF summarization failed",

        error:
          error.message,

      });

    }

  }
);

// =====================================
// INTERVIEW ROUTE
// =====================================

router.post(

  "/interview",

  async (req, res) => {

    try {

      const {
        topic,
        level,
      } = req.body;

      if (!topic ||
          topic.trim() === "") {

        return res.status(400).json({

          message:
            "Topic is required",

        });

      }

      if (!apiKey) {
        return res.status(500).json({
          message:
            "Server misconfigured: missing OPENROUTER_API_KEY environment variable.",
        });
      }

      const completion = await callOpenRouterChat(
        [
          { role: "system", content: "You are an expert interview coach." },
          {
            role: "user",
            content: `
Create interview preparation for:

Topic: ${topic}

Level: ${level || "beginner"}

Include:
- Technical questions
- HR questions
- Answer tips
- Important concepts
`,
          },
        ],
        "openrouter/auto"
      );

      const finalText =
        completion.choices[0].message.content;

      res.json({
        result: finalText,
      });

    } catch (error) {

      console.log("❌ INTERVIEW ERROR:");

      console.log(error);

      res.status(500).json({

        message:
          "Interview generation failed",

      });

    }

  }
);

module.exports = router;