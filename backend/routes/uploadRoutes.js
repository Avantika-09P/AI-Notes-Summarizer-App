const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

router.post(
  "/",
  upload.single("pdf"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No PDF file uploaded" });
    }

    console.log("PDF Uploaded:", req.file.filename);

    res.json({
      message: "PDF uploaded successfully",
      file: req.file.filename
    });

  }
);

module.exports = router;