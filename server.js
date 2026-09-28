import express from "express";
import multer from "multer";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const upload = multer({ dest: "/tmp/voice-to-text" });

app.use(express.static(path.join(__dirname, "public")));

app.post("/api/transcribe", upload.single("audio"), async (req, res) => {
  let filePath = req.file?.path;
  try {
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "OPENAI_API_KEY မထည့်ရသေးပါ။" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "အသံဖိုင် မရွေးရသေးပါ။" });
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const result = await client.audio.transcriptions.create({
      file: fs.createReadStream(filePath),
      model: "gpt-4o-mini-transcribe",
      language: "my"
    });

    res.json({ text: result.text || "" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err?.message || "Transcription မအောင်မြင်ပါ။" });
  } finally {
    if (filePath) fs.promises.unlink(filePath).catch(() => {});
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`VoiceToText running on port ${port}`));
