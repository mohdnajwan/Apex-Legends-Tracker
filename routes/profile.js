const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/:platform/:username", async (req, res) => {
  // Req data from parameter
  const { platform, username } = req.params;
  // Try fetching the data
  try {
    const headers = {
      "TRN-Api-Key": process.env.API_KEY,
    };

    const response = await fetch(`${process.env.URL}/${platform}/${username}`, {
      headers,
    });
    const data = await response.json();
    res.json(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
