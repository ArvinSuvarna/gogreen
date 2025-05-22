const express = require('express');
const router = express.Router();

router.get('/zin', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchZinData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/zin', async (req, res) => {
  try {
    const result = await createZin(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;