import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey:process.env.OPEN_AI
});

async function audioToText(filepath) {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream(filepath),
    model: "whisper-1",
    response_format: "verbose_json",
    timestamp_granularities: ["segment"]
  });
  console.log(transcription.segments[0])

  return transcription
}

export default audioToText;