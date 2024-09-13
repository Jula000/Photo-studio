import { NextResponse } from "next/server";
import connectDB from "@/../lib/mongo/mongoConnect";
import { PhotographySection } from "@/../models/photographySection"; // Ensure correct path

export async function GET() {
  try {
    await connectDB();

    const photographySections = await PhotographySection.find({});
    return NextResponse.json(photographySections);
  } catch (error) {
    console.error("Error fetching photography sections:", error);
    return NextResponse.json(
      { error: "Failed to fetch photography sections" },
      { status: 500 }
    );
  }
}
