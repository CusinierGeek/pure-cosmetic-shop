import mongoose from "mongoose";

const protocol = process.env.DATABASE_PROTOCOL ?? "";
const cluster = process.env.DATABASE_CLUSTER ?? "";
const params = process.env.DATABASE_PARAMS ?? "";
const username = process.env.DATABASE_USERNAME
  ? process.env.DATABASE_USERNAME + ":"
  : "";
const password = process.env.DATABASE_PASSWORD ?? "";
const database = process.env.DATABASE_NAME ?? "";
const port = process.env.DATABASE_PORT ? ":" + process.env.DATABASE_PORT : "";

export const connectionString = `${protocol}://${username}${password}@${cluster}${port}/${database}${params}`;
console.log(connectionString);
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false,
};

export const connect = (callback) =>
  mongoose
    .connect(connectionString, options)
    .then((db) => {
      console.log(`Connecté avec succès à la base ${database} sur ${cluster}`);
      if (callback) callback();
    })
    .catch((err) => {
      console.log(err);
      console.log(connectionString);
    });
