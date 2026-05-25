const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const upload = require("../middleware/upload");

router.post(
  "/create",
  upload.single("image"),
  async (req, res) => {
    try {
      const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        image: req.file.filename,
      });

      await newPost.save();

      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

module.exports = router;