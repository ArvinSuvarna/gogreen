const express = require('express');
const router = express.Router();

router.get('/ip', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchIpData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/ip', async (req, res) => {
  try {
    const result = await createIp(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;