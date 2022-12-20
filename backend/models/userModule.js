import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    isAdmin: Boolean,
    country: String,
    city: String,
  },
  { timestamps: true }
);

const User = model("user", userSchema);

export default User;
