// import { connectToDb } from "./utils";
// import { Post } from "./models";

//TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Joe" },
//   { id: 3, name: "Jimmy" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userID: 1 },
//   { id: 2, title: "Post 2", body: "......", userID: 1 },
//   { id: 3, title: "Post 3", body: "......", userID: 2 },
//   { id: 4, title: "Post 4", body: "......", userID: 2 },
// ];

// export const getposts = async () => {
//   try {
//     connectToDb();
//     const posts = await Post.find();
//     return posts;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to fetch posts");
//   }
// };

// export const getpost = async (slug) => {
//   try {
//     await connectToDb();
// console.log("Connected to the database"); // Log success
// console.log("Slug value:", slug);
//     const post = await Post.findOne({ slug: slug });
//     return post;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to fetch post");
//   }
// };

// export const getUser = async (id) => {
//   return users.find((user) => user.id === parseInt(id));
// };
