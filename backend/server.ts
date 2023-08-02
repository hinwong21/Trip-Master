import express from "express";
import path from "path";

const app = express();

app.use(express.json());
let clientPath = path.join(__dirname, "client");
app.use(express.static(clientPath));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`http://localhost:3000`);
});
