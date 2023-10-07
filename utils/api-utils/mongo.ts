import { MongoClient } from "mongodb";

const client = new MongoClient(`mongodb+srv://rubengameplay2006:${process.env.MONGO_PASSWORD}@cluster0.gd60t9v.mongodb.net/`)

export default client;