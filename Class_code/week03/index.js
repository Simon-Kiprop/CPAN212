import express from "express";
import dotenv from "dotenv";
dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 8000; 
app.get("/", (req, res) => {
    res.send("Welcome to the server - GET");
});

app.post("/", (req, res) => {
    res.send("Welcome to the server - POST");
});

app.put("/", (req, res) => {
    res.send("Welcome to the server - PUT");
});

app.delete("/", (req, res) => {
    res.send("Welcome to the server - DELETE");
});

app.get("/watch", (req, res) => {
    console.log(req.url)
    console.log("URL call:")
    console.log(req.method)
    console.log("METHOD call:")
    console.log(req.headers)
    console.log("HEADERS call:")
    console.log(req.query)
    console.log("QUERY call:")
    console.log(req.params)
    console.log("REQ call:")
    console.log(req.body)
    res.send("welcome to watch list")
    });
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
