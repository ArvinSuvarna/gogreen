const express = require('express');
const router = express.Router();

router.get('/uwi', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchUwiData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/uwi', async (req, res) => {
  try {
    const result = await createUwi(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;