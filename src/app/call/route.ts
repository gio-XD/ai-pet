import { twitliCall } from "@/lib/twilio";
import { NextResponse } from "next/server";

export const GET = async () => {
  await twitliCall();

  return NextResponse.json({ success: true });
};
