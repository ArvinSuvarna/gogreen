const express = require('express');
const router = express.Router();

router.get('/aj', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchAjData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/aj', async (req, res) => {
  try {
    const result = await createAj(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;