const express = require('express');
const router = express.Router();

router.get('/wos', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchWosData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/wos', async (req, res) => {
  try {
    const result = await createWos(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;