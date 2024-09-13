import { NextResponse } from "next/server";
import connectDB from "@/../lib/mongo/mongoConnect";
import { SessionPriceCard } from "@/../models/photographySection"; // Importing only SessionPriceCard

export async function GET() {
  try {
    await connectDB();

    const sessionPriceCards = await SessionPriceCard.find({});
    return NextResponse.json(sessionPriceCards);
  } catch (error) {
    console.error("Error fetching session price cards:", error);
    return NextResponse.json(
      { error: "Failed to fetch session price cards" },
      { status: 500 }
    );
  }
}
