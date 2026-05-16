const express = require("express");

const router = express.Router();

const OpenAI = require("openai");

// =====================================
// OPENROUTER CLIENT
// =====================================

const client = new OpenAI({

  apiKey:
    process.env.OPENROUTER_API_KEY,

  baseURL:
    "https://openrouter.ai/api/v1",

});

// =====================================
// TEST ROUTE
// =====================================

router.get("/", (req, res) => {

  res.json({
    message: "AI Routes Working 🚀",
  });

});

// =====================================
// AI SUMMARY
// =====================================

router.post(
  "/summarize",
  async (req, res) => {

    try {

      const { text } = req.body;

      if (!text || text.trim() === "") {

        return res.status(400).json({
          message:
            "Text is required",
        });

      }

      const completion =
        await client.chat.completions.create({

          model: "openrouter/auto",

          messages: [

            {
              role: "system",
              content:
                "You are an AI study assistant.",
            },

            {
              role: "user",
              content:
                `Summarize these notes into easy bullet points:\n\n${text}`,
            },

          ],

        });

      const finalText =
        completion.choices[0].message.content;

      res.json({
        result: finalText,
      });

    } catch (error) {

      console.log("❌ SUMMARY ERROR:");

      console.log(
        error?.response?.data ||
        error.message ||
        error
      );

      res.status(500).json({

        message:
          "Summary generation failed",

      });

    }

  }
);

// =====================================
// AI INTERVIEW
// =====================================

router.post(
  "/interview",
  async (req, res) => {

    try {

      const {
        topic,
        level,
      } = req.body;

      if (!topic || topic.trim() === "") {

        return res.status(400).json({
          message:
            "Topic is required",
        });

      }

      const completion =
        await client.chat.completions.create({

          model: "openrouter/auto",

          messages: [

            {
              role: "system",
              content:
                "You are an expert interview coach.",
            },

            {
              role: "user",
              content:
                `
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

        });

      const finalText =
        completion.choices[0].message.content;

      res.json({
        result: finalText,
      });

    } catch (error) {

      console.log("❌ INTERVIEW ERROR:");

      console.log(
        error?.response?.data ||
        error.message ||
        error
      );

      res.status(500).json({

        message:
          "Interview generation failed",

      });

    }

  }
);

module.exports = router;
