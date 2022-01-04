const express = require('express');
const router = express.Router();

router.get('/maw', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchMawData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/maw', async (req, res) => {
  try {
    const result = await createMaw(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;