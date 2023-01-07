import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function putMoviesById(id, data) {
  return await client.db("movie").collection("movies").updateOne({ _id: ObjectId(id)}, { $set: data });
}
export async function deleteMovies(id) {
  return await client.db("movie").collection("movies").deleteOne({  _id: ObjectId(id) });
}
export async function postMovies(data) {
  return await client.db("movie").collection("movies").insertMany(data);
}
export async function getMovies(request) {
  return await client.db("movie").collection("movies").find(request.query).toArray();
}
export async function getMoviesById(id) {
  return await client.db("movie").collection("movies").findOne({ _id: ObjectId(id) });
}
