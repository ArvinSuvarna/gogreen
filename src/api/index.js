const express = require('express');
const router = express.Router();

router.get('/index', async (req, res) => {
  try {
    // Du oriuha ifipu.

    const data = await fetchIndexData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/index', async (req, res) => {
  try {
    const result = await createIndex(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;