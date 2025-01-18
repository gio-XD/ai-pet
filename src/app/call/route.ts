import { twitliCall } from "@/lib/twilio";
import { NextResponse } from "next/server";

export const GET = async () => {
  await twitliCall("+15105988232");

  return NextResponse.json({ success: true });
};
