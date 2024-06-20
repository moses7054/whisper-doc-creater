import dotenv from "dotenv"
dotenv.config()
import fs from "fs";
import audioToText from "./utils/audio_to_text.js";
import videoToAudio from "./utils/video_to_audio.js";

//test

// // toText gets the transcription from audio_to_text , converts into json.
// This json has start and end time of each sentence and the sentence which is being said.
const toText =(path)=>{
    audioToText(path).then((data)=>{
        console.log("data retrieved");
        // Convert JSON data to string
     const filteredSegments = data.segments.map(({ start, end, text }) => ({ start, end, text }));


const jsonString = JSON.stringify(filteredSegments, null, 2);

// File path for the new JSON file
const filePath = 'newData.json';

// Write data to the new JSON file
fs.writeFile(filePath, jsonString, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log(`Data has been written to ${filePath}`);
});

    })
}

// toText is a fuction is defined above
videoToAudio('./assests/source.mp4', './assests/compressedAudio.mp3',toText);


