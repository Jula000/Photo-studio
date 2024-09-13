// app/api/contact/route.tsx

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/../../lib/mongo/mongoConnect";
import Contact from "@/../../models/contact";

// Handle POST requests to save contact form submissions
export async function POST(request: NextRequest) {
  try {
    await connectDB(); // Connect to MongoDB

    const data = await request.json(); // Get the data from the request body
    const newContact = new Contact(data); // Create a new Contact document
    await newContact.save(); // Save the document in the database

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact form submission:", error);
    return new NextResponse("Error saving contact form submission", {
      status: 500,
    });
  }
}
