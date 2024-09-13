import mongoose, { Schema, model, models } from "mongoose";

// Define the schema for a Photography Section
const photographySectionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  linkText: { type: String, required: true },
  linkUrl: { type: String, required: true },
  imageUrls: [{ type: String, required: true }],
});

// Define the schema for a Session Price Card
const sessionPriceCardSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // Duration in hours
  imagesIncluded: { type: Number, required: true },
  additionalImagePrice: { type: Number, required: true },
  description: { type: String, required: true },
});

export const PhotographySection =
  models.PhotographySection ||
  model("PhotographySection", photographySectionSchema);

export const SessionPriceCard =
  models.SessionPriceCard || model("SessionPriceCard", sessionPriceCardSchema);
