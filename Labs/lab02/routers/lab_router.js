import express from 'express';
const router = express.Router();

router.get("/", (req, res) => { 
    res.send("Welcome to the server")
})


res.send('${x+y}')
})

export default router;
