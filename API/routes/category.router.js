import express from 'express';

const router =express.Router();

import * as categoryController from '../Controller/category.controller.js';

router.post("/save",categoryController.save);

router.get("/fetch",categoryController.fetch);

router.delete("/delete",categoryController.deleteCategory);


export default router;