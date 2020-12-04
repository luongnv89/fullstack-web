const express = require("express");
const router = express.Router();

/**
 * Get the running status of test campaign
 */
router.get("/", (req, res, next) => {
  console.log('Get a request to /roms');
  res.send({
    roms:[]
  });
});

module.exports = router;