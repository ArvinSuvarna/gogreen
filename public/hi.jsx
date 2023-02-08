const express = require('express');
const router = express.Router();

router.get('/hi', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchHiData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/hi', async (req, res) => {
  try {
    const result = await createHi(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;