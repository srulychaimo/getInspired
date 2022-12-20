import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";

mongoose
  .connect("mongodb://127.0.0.1/getInspiredDB")
  .then(() => console.log("Connected to db!"))
  .catch((err) => console.error(err));

const app = express();

app.use(express.json());

app.use("/api/users", userRoute);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
