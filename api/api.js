const express = require('express');
const cors = require('cors');

const snackRouter = require('./routers/snack');

const api = express();

api.use(cors());
api.use(express.json());

api.get("/", (req, res) => {
    res.json({
        title: "Snack Rankings",
        description: "Find and rate the best snacks ever!"
    })
})
api.use("/snacks", snackRouter);

module.exports = api;
