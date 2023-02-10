const Post = require("../models/post.js");

async function index(req, res) {
    try {
        const posts = await Post.getAll();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const post = await Post.getOneById(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function category(req, res) {
    try {
        const cat = parseInt(req.params.category);
        const posts = await Post.getAllByCategory(cat);
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function create(req, res) {
    try {
        const data = req.body;
        const checkValues = ["post_category", "post_text"].every(p => Object.hasOwn(data, p))
        if (checkValues) {
            const post = await Post.create(data);
            res.status(201).send(post);
        } else {
            res.status(404).json({
                error: "Post category and text must be entered"
            })
        }
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const post = await Post.getOneById(id);
        const data = req.body;
        const result = await post.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const post = await Post.getOneById(id);
        const result = await post.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

module.exports = {
    index, show, category, create, update, destroy
}
