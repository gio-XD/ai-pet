import { bot } from "@/lib/bot";
import { webhookCallback } from "grammy";

export const maxDuration = 60;

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const config = { runtime: "edge" };

export const POST = webhookCallback(bot, "std/http");
