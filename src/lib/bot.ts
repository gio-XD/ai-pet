import { PublicKey } from "@solana/web3.js";
import { Bot, InputFile } from "grammy";
import { openAiTts } from "./openai/tts";

const isAddress = (message?: string) => {
  if (!message) return false;
  const address = new PublicKey(message);

  return PublicKey.isOnCurve(address);
};

export const bot = new Bot("7671252515:AAHe559e5GZuRTldOmHiE99QBrpxCtuXr0k");

bot.on("message", async (ctx) => {
  const message = ctx.message.text;

  if (isAddress(message)) {
    await ctx.reply("bind success");
  } else {
    const data = await openAiTts();

    const file = new InputFile(data, "a.mp3");

    await ctx.replyWithVoice(file, {
      caption: undefined,
    });
  }
});
