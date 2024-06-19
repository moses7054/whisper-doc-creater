import ffmpeg from 'fluent-ffmpeg';


// const videoPath = "../assests/source.mp4"; // Replace with your video file path
// const audioOutputPath = "../assests/audio.wav"; // Replace with where you want to save the audio file

// Extract audio in WAV format from the video file
const videoToAudio =(videoPath,audioOutputPath,toText)=>{
  ffmpeg(videoPath)
  .noVideo() // Disable video stream
  .audioCodec('libmp3lame') // Use MP3 codec for better compression
  .audioBitrate('128k') // Set the audio bitrate for compression
  .format('mp3') // Specify output format (MP3)
  .save(audioOutputPath)
  .on('end', () => {
    console.log('Audio extracted successfully:', audioOutputPath);
    toText(audioOutputPath);
  })
  .on('error', (err) => {
    console.error('Error extracting audio:', err);
  });

}


export default videoToAudio