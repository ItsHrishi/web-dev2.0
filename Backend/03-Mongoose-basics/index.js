import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json("hello");
});

app.listen(PORT, () => {
  console.log("app is listining at port : ", PORT);
});
