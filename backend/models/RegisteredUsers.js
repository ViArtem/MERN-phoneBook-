import { Schema, model } from "mongoose";

// Scheme for saving registered users
const shemRegist = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  refresh: { type: String },
  customId: { type: String },
});

export default model("UserRegistered", shemRegist);
