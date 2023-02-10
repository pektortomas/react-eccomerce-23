import express from "express";
import cors from "cors";
import fs from "fs";
import bodyParser from "body-parser";

const port = 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());

const checkIfExist = (path) => {
  try {
    const data = JSON.parse(fs.readFileSync(path, "utf-8"));
    return data;
  } catch {
    return null;
  }
};

app.get("/", (req, res) => {
  console.log("requesting API");
  res.send("Response OK");
});

app.get("/products", (req, res) => {
  console.log("requesting Products");

  const data = fs.readFileSync("./../dtb/product.json", "utf-8");

  res.send(JSON.parse(data));
});

app.post("/sendOrder", (req, res) => {
  const reqData = req.body;

  if (checkIfExist("./../dtb/orders.json")) {
    const data = JSON.parse(fs.readFileSync("./../dtb/orders.json", "utf-8"));
    fs.writeFileSync("./../dtb/orders.json", JSON.stringify([reqData, ...data]), "utf-8");
  } else {
    fs.writeFileSync("./../dtb/orders.json", JSON.stringify([reqData]), "utf-8");
  }

  console.log("New order");
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
