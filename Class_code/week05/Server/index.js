import express from "express"; 
import cors from "cors";
import multer from "multer";

//grab info, parse file, save file in destination + set file, all good
const storage = multer.diskStorage({
destination:function (req,file,cp)

})
const app = express();
const PORT = process.env.PORT || 8000;
 
// middleware

app.use(cors());
app.use(express.urlencoded({ extended:true})); //plain HTM forms
// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});
app.get("/data", (req, res) => {
    res.json({
        name:"Simon",
        Password:"Password3",
        username:"Simontalam"
    });
  });
  app.post("/login", (req, res) => {
    console.log(req.body);
    res.json("i got your information")
  })
  app.post("/upload",XMLHttpRequestUpload.single("file") (req, res) => {
    console.log(req.body);
    res.json("i got your information")
  })
 
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
 

/*
React -> Server -> /images -> parse for the req.body with multer ->save