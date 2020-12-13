const express = require("express");
const passport = require("passport");
const { signin, signup, treasureController } = require("./controllers");

const router = express.Router();

router.post("/signup", signup);

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

// router.get("/treasure", treasureController);

module.exports = router;
