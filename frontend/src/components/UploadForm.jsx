import { useState } from "react";

import axios from "axios";
import API from "../services/api";

function UploadForm({ setSummary }) {

  const [file, setFile] = useState(null);

  const [message, setMessage] = useState("");

  const [previewURL, setPreviewURL] =
    useState(null);


  // =====================================
  // HANDLE FILE CHANGE
  // =====================================

  const handleFileChange = (e) => {

    const selectedFile =
      e.target.files[0];

    setFile(selectedFile);

    // PDF PREVIEW URL
    if (selectedFile) {

      const fileURL =
        URL.createObjectURL(selectedFile);

      setPreviewURL(fileURL);

    }

  };


  // =====================================
  // HANDLE UPLOAD
  // =====================================

  const handleUpload = async (e) => {

    e.preventDefault();

    if (!file) {

      setMessage("Please upload a PDF");

      return;

    }

    try {

      const formData =
        new FormData();

      formData.append("pdf", file);

      const response = await API.post("/ai/summarize", formData);

      setMessage(
        response.data.message
      );

      setSummary(
        response.data.result
      );

    } catch (error) {

      console.error("Upload error:", error);

      const serverMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Upload failed";

      setMessage(serverMessage);

    }

  };


  return (

    <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-3xl">

      <h2 className="text-3xl font-bold mb-6 text-cyan-400">

        Upload Notes PDF

      </h2>

      <form onSubmit={handleUpload}>

        <input

          type="file"

          accept=".pdf"

          onChange={handleFileChange}

          className="w-full bg-slate-700 p-3 rounded-lg mb-4"

        />

        {/* FILE NAME */}

        {file && (

          <div className="bg-slate-700 p-4 rounded-lg mb-4">

            <p className="text-cyan-300 font-semibold">

              Selected File:

            </p>

            <p className="text-white">

              {file.name}

            </p>

          </div>

        )}

        {/* PDF PREVIEW */}

        {previewURL && (

          <div className="mb-6">

            <iframe

              src={previewURL}

              title="PDF Preview"

              className="w-full h-96 rounded-xl border border-slate-600"

            />

          </div>

        )}

        <button

          type="submit"

          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg w-full font-semibold"

        >

          Upload PDF

        </button>

      </form>

      {message && (

        <p className="mt-4 text-center text-cyan-300">

          {message}

        </p>

      )}

    </div>

  );

}

export default UploadForm;