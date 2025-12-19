import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/api/contact", (req, res) => {
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
