import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error("Please define MONGO_URL in your .env file");
}

if(!global.mongoose){
  global.mongoose = {conn: null, promise: null};
}

export default async function connect() {

  if(global.mongoose.conn){
    return global.mongoose.conn;
  }

  if(!global.mongoose.promise){
    global.mongoose.promise = mongoose.connect(MONGO_URL).then((mongoose) => mongoose)
  }

  const connec = await global.mongoose.promise;
  global.mongoose.conn = connec
}
