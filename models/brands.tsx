import mongoose, { Schema, model, models } from "mongoose";

const brandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
});

const Brand = models.Brand || model("Brand", brandSchema);

export default Brand;
