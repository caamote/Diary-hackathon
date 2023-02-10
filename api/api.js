const express = require('express');
const cors = require('cors');

const postRouter = require('./routers/post');

const api = express();

api.use(cors());
api.use(express.json());

api.get("/", (req, res) => {
    res.json({
        title: " My Diary",
        description: "Post and read your old entries to this diary"
    })
})
api.use("/posts", postRouter);

module.exports = api;
