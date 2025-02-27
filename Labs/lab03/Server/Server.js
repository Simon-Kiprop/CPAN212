import express from 'express';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import multer from 'multer';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static('public'));

const imagesDir = path.join(__dirname, 'public/images');

app.get('/api/random-images', (req, res) => {
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      console.error('Error reading images directory:', err);
      return res.status(500).send('Error reading images directory');
    }
    const imageFiles = files.filter((file) =>
      ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())
    );
    const randomImages = _.sampleSize(imageFiles, Math.min(3, imageFiles.length));
    const imageUrls = randomImages.map((image) => `/images/${image}`);
    res.json(imageUrls);
  });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/doguploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/api/upload-dog', upload.single('dogImage'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send('Dog image uploaded successfully.');
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});