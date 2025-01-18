import { openai } from "./index";

export const genText = async () => {
  const aiout = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `你是一个尖酸刻薄的批评家，我最近炒币亏了很多钱,我的MBTI是ISFP，我的投资偏好比较保守,你用合适的语气批评我一顿一顿,言简意赅`,
      },
    ],
    stream: false,
  });

  return aiout?.choices?.[0]?.message?.content;
};
export const openAiTts = async () => {
  const text = await genText();

  if (!text) throw new Error("no text!");
  const mp3 = await openai.audio.speech.create({
    input: text,
    model: "tts-1",
    voice: "alloy",
  });

  const buffer = await mp3.arrayBuffer();

  const uint8Array = new Uint8Array(buffer);

  return uint8Array;
};
