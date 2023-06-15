const { Router } = require("express");
const disb = require("../controllers/dispenser");
const router = Router();

router
  .post("/", disb.createDispenser)
  .get("/", disb.getDispenser)
  .get("/:id", disb.getDispenserById)
  .post("/:id/open", disb.openDispenser)
  .post("/:id/close", disb.closeDispenser)
  .put("/:id", disb.updateDispenser);

module.exports = router;
