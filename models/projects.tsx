import mongoose, { Schema, model, models } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["portraits", "events", "commercial"],
    required: true,
  },
});

const Project = models.Project || model("Project", projectSchema);

export default Project;
