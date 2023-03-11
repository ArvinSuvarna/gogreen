const express = require('express');
const router = express.Router();

router.get('/tuz', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchTuzData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/tuz', async (req, res) => {
  try {
    const result = await createTuz(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;