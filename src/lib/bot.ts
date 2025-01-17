import { Bot, InputFile } from "grammy";

export const bot = new Bot("7671252515:AAHe559e5GZuRTldOmHiE99QBrpxCtuXr0k");

bot.on("message", async (ctx) => {
  const file = new InputFile("../../public/dog.ogg");

  await ctx.replyWithVoice(file, {
    caption: "???",
  });
});
