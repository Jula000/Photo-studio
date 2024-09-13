import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
});

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
