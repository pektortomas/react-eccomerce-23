import express from "express";
import cors from "cors";
import fs from "fs";

const port = 8080;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  console.log("requesting API");
  res.send("Response OK");
});

app.get("/products", (req, res) => {
  console.log("requesting Products");

  const data = fs.readFileSync("./../dtb/product.json", "utf-8");

  res.send(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
