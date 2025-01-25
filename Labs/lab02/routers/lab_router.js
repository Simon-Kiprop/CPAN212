import express, { Router } from "express";  
const labRouter = express.Router();
Router.get("/", (req, res) => {
  res.send("Welcome to the lab router");
});

labRouter.get("/name", (req, res) => {
  res.send("Simon Talam");
});

labRouter.get("/greeting", (req, res) => {
  res.send("Hello, I'm Simon");
});

labRouter.get("/add/:x/:y", (req, res) => {
  let x = parseFloat(req.params.x);
  let y = parseFloat(req.params.y);
  res.send(`${x + y}`);
});

labRouter.get("/calculate/:a/:b/:operation", (req, res) => {
  let a = parseFloat(req.params.a);
  let b = parseFloat(req.params.b);
  const operation = req.params.operation;

  switch (operation) {
    case "+":
      res.send(`${a + b}`);
      break;
    case "-":
      res.send(`${a - b}`);
      break;
    case "/":
      res.send(`${a / b}`);
      break;
    case "*":
      res.send(`${a * b}`);
      break;
    case "**":
      res.send(`${a ** b}`);
      break;
    default:
      res.send("Invalid operation. Use +, -, /, *, or **.");
  }
});
export default labRouter;
