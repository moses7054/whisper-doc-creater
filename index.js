import dotenv from "dotenv"
dotenv.config()
import audioToText from "./utils/audio_to_text.js";
import videoToAudio from "./utils/video_to_audio.js";


const toText =(path)=>{
    audioToText(path).then((data)=>{
        console.log(data);
    })
}


videoToAudio('./assests/source.mp4', './assests/compressedAudio.mp3',toText);


