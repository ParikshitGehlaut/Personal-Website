// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//       min: 1,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       min: 1,
//     },
//     password: {
//       type: String,
//       required: true,
//       unique: true,
//       min: 6,
//     },
//     img: {
//       type: String,
//     },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// const postSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       min: 1,
//     },
//     desc: {
//       type: String,
//       required: true,
//       min: 1,
//     },
//     img: {
//       type: String,
//     },
//     userId: {
//       type: String,
//       required: true,
//     },
//     slug: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   },
//   { timestamps: true }
// );

// export const User = mongoose.models.User || mongoose.model("User", userSchema);
// export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
