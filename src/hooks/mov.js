const express = require('express');
const router = express.Router();

router.get('/mov', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchMovData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/mov', async (req, res) => {
  try {
    const result = await createMov(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;