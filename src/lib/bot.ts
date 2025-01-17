import { Bot } from "grammy";

export const bot = new Bot("7671252515:AAHe559e5GZuRTldOmHiE99QBrpxCtuXr0k");

bot.on("message", async (ctx) => {
  await ctx.reply("Hi there!");
});
