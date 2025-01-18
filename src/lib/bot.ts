import { Bot, InputFile } from "grammy";
import { openAiTts } from "./openai/tts";

export const bot = new Bot("7671252515:AAHe559e5GZuRTldOmHiE99QBrpxCtuXr0k");

bot.on("message", async (ctx) => {
  const data = await openAiTts();

  const file = new InputFile(data, "a.mp3");

  await ctx.replyWithVoice(file, {
    caption: undefined,
  });
});
