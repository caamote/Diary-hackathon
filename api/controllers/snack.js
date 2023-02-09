const Snack = require("../models/snack.js");

async function index(req, res) {
    try {
        const snacks = await Snack.getAll();
        res.status(200).json(snacks);
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const snack = await Snack.getOneById(id);
        res.status(200).json(snack);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function getTop(req, res) {
    try {
        const id = parseInt(req.params.id);
        const snack = await Snack.getTopSnack(id);
        res.status(200).json(snack);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function create(req, res) {
    try {
        const data = req.body;
        const checkValues = ["snack_name"].every(p => Object.hasOwn(data, p))
        if (checkValues) {
            const snack = await Snack.create(data);
            res.status(201).send(snack);
        } else {
            res.status(404).json({
                error: "Snack name must be entered"
            })
        }
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const snack = await Snack.getOneById(id);
        const data = req.body;
        const result = await snack.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const snack = await Snack.getOneById(id);
        const result = await snack.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

module.exports = {
    index, show, getTop, create, update, destroy
}
