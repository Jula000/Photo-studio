import { NextResponse } from "next/server";
import connectDB from "@/../lib/mongo/mongoConnect";
import Project from "@/../models/projects";

export async function GET() {
  await connectDB();

  try {
    const projects = await Project.find({});
    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
