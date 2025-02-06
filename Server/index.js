const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const passwordRoute = require("./Routes/passwordRoute");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests only from this origin
    allowedHeaders: ["Content-Type", "Authorization"], // Add headers to allow
  })
);

const port = process.env.PORT || 3000;
app.use("/api/auth", userRoute);
app.use("/api/password", passwordRoute);
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
  })
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log("err", err.message);
  });

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
