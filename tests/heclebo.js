const express = require('express');
const router = express.Router();

router.get('/heclebo', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchHecleboData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/heclebo', async (req, res) => {
  try {
    const result = await createHeclebo(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;