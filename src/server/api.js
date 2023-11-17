var express = require("express");
var router = express.Router();

router.post("/login", function (req, res) {
  res.status(200);
  res.json({
    data: "login",
  });
});
router.get("/test", function (req, res) {
  res.status(200);
  res.json({
    data: "test",
  });
});
router.get("/refreshToken", function (req, res, next) {
  res.status(200);
  res.json({
    data: "1234567890",
  });
});
module.exports = router;
