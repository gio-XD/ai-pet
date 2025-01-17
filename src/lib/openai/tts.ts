import { openai } from "./index";

export const openAiTts = async () => {
  const mp3 = await openai.audio.speech.create({
    input:
      "Ensure that the Blob contains valid binary data appropriate for the file type you're sending (e.g., audio data for audio files).",
    model: "tts-1",
    voice: "alloy",
  });

  const buffer = await mp3.arrayBuffer();

  const uint8Array = new Uint8Array(buffer);

  return uint8Array;
};
