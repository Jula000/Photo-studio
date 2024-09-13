import { NextResponse } from "next/server";
import connectDB from "@/../../lib/mongo/mongoConnect";
import Project from "@/../models/portfolio";

export async function GET() {
  await connectDB();

  try {
    const projects = await Project.find({});
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
