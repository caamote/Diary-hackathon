const { Router } = require('express');

const postController = require('../controllers/post.js');

const postRouter = Router();

postRouter.get("/", postController.index);
postRouter.get("/cat/:category", postController.category);
postRouter.get("/:id", postController.show);
// postRouter.get("/date", postController.showDate);
postRouter.post("/", postController.create);
// postRouter.delete("/:id", postController.destroy);
// postRouter.patch("/:id", postController.update);

module.exports = postRouter;
