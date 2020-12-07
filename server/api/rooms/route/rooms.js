const express = require("express");
const router = express.Router();
const roomController = require("../controller/roomController");

router.get("/", roomController.getRooms);
router.post("/", roomController.saveRoom);

module.exports = router;