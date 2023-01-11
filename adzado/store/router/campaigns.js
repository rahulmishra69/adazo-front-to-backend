const express = require("express");
const router = express.Router();
const controllerSchema = require("../controller/campaigns");
router.post("/", controllerSchema.controllerSchema);
router.get("/", controllerSchema.getData);
router.get("/:id", controllerSchema.getById);
router.put("/:id", controllerSchema.updateData);
router.delete("/:id", controllerSchema.deleteData);
module.exports = router;
