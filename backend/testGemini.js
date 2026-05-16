require("dotenv").config();

const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

async function runTest() {

  try {

    const genAI =
      new GoogleGenerativeAI(
        process.env.GEMINI_API_KEY
      );

    const model =
      genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
      });

    const result =
      await model.generateContent(
        "Say hello"
      );

    const response =
      await result.response;

    console.log(
      response.text()
    );

  } catch (error) {

    console.log(error);

  }

}

runTest();