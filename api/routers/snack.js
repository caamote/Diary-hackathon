const { Router } = require('express');

const snackController = require('../controllers/snack.js');

const snackRouter = Router();

snackRouter.get("/", snackController.index);
snackRouter.get("/top", snackController.getTop);
snackRouter.get("/:id", snackController.show);
snackRouter.post("/", snackController.create)
snackRouter.delete("/:id", snackController.destroy);

module.exports = snackRouter;
