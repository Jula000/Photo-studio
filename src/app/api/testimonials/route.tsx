import { NextResponse } from "next/server";
import connectDB from "@/../../lib/mongo/mongoConnect";
import Testimonial from "@/../../models/testimonials";

export async function GET() {
  await connectDB();

  try {
    const testimonials = await Testimonial.find({});
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
