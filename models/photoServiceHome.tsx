import mongoose, { Schema, model, models } from "mongoose";

const photoServiceHomeSchema = new Schema({
  photo: {
    type: String,
    required: true,
  },
});

const PhotoServiceHome =
  models.PhotoServiceHome || model("PhotoServiceHome", photoServiceHomeSchema);

export default PhotoServiceHome;
