import mongoose, { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    desc: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: false },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

const Post = models.Post || model("Post", postSchema);

export default Post;