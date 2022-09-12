const express = require('express');
const router = express.Router();

router.get('/jazene', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchJazeneData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/jazene', async (req, res) => {
  try {
    const result = await createJazene(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;