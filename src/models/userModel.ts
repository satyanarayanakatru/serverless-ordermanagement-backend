import mongoose, { Document, Schema } from "mongoose";

export interface Iuser extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
