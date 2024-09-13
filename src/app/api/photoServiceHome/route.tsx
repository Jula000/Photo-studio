import { NextResponse } from "next/server";
import connectDB from "@/../lib/mongo/mongoConnect";
import PhotoServiceHome from "@/../../models/photoServiceHome";

const photoServiceHome = [
  {
    photo: "/portfolio-page/portfolio-page-bot.jpg",
  },
  {
    photo: "/photoServiceHome/photoServiceHome1.jpg",
  },
  {
    photo: "/photoServiceHome/photoServiceHome2.jpg",
  },
];

export async function GET() {
  await connectDB();

  try {
    const existingPhotos = await PhotoServiceHome.find({});
    if (existingPhotos.length === 0) {
      await PhotoServiceHome.insertMany(photoServiceHome);
    }

    const photos = await PhotoServiceHome.find({});
    return NextResponse.json({ photos });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch photos" },
      { status: 500 }
    );
  }
}
