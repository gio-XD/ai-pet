import { Bot, InputFile } from "grammy";
import { openAiTts } from "./openai/tts";

export const bot = new Bot("7671252515:AAHe559e5GZuRTldOmHiE99QBrpxCtuXr0k");

bot.on("message", async (ctx) => {
  const filearrayBuffer = await fetch("https://ai-pet-two.vercel.app/dog.ogg")
    .then((res) => res.blob())
    .then((blob) => blob.arrayBuffer());
  console.log("🚀 ~ bot.on ~ filearrayBuffer:", filearrayBuffer);

  const data = await openAiTts();

  const file = new InputFile(data, "a.mp3");

  await ctx.replyWithVoice(file, {
    caption: "???",
  });
});
