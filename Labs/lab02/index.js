import express from "express";
import labRouter from "./routers/lab_router.js";

const app = express();
const port = 8000;
app.use("/lab", labRouter);
app.get("/", (req, res) => {
    res.send("Welcome to the lab router");
  });
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


