const express = require("express");
const db = require("./db");
var fs = require('fs');
const cors = require("cors");
const multer = require("multer");
const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'img/products');
  },
  filename: (req, file, cb) => {
      console.log(req)
      cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('myFile'), (req, res, next) => {
  try {
      return res.status(201).json({
          message: 'File uploded successfully'
      });
  } catch (error) {
      console.error(error);
  }
});

app.post('/upload2', upload.any('myFile'), (req, res, next) => {
  try {
      return res.status(201).json({
          message: 'File uploded successfully'
      });
  } catch (error) {
      console.error(error);
  }
});
app.use("/api", require("./routes.js"));

app.listen("3001");
