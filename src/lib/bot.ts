import { Bot, InputFile } from "grammy";

export const bot = new Bot("7671252515:AAHe559e5GZuRTldOmHiE99QBrpxCtuXr0k");

bot.on("message", async (ctx) => {
  const filearrayBuffer = await fetch("https://ai-pet-two.vercel.app/dog.ogg")
    .then((res) => res.blob())
    .then((blob) => blob.arrayBuffer());

  const file = new InputFile(new Uint8Array(filearrayBuffer));

  await ctx.replyWithVoice(file, {
    caption: "???",
  });
});
