// app/api/brands/route.tsx

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/../../lib/mongo/mongoConnect";
import Brand from "@/../../models/brands";

export async function GET() {
  try {
    await connectDB();

    const brands = await Brand.find();
    return NextResponse.json(brands);
  } catch (error) {
    console.error("Error fetching brands:", error);
    return new NextResponse("Error fetching brands", { status: 500 });
  }
}

// Обробка POST запиту для створення нового бренду
export async function POST(request: NextRequest) {
  try {
    await connectDB(); // Підключення до MongoDB

    const data = await request.json(); // Отримання даних з тіла запиту
    const newBrand = new Brand(data); // Створення нового бренду на основі даних
    await newBrand.save(); // Збереження нового бренду в базі даних

    return NextResponse.json(newBrand, { status: 201 });
  } catch (error) {
    console.error("Error creating brand:", error);
    return new NextResponse("Error creating brand", { status: 500 });
  }
}
