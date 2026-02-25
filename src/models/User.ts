import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true },
});

const User = models.User || model("User", userSchema);

export default User;
