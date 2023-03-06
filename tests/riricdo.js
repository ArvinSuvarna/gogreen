const express = require('express');
const router = express.Router();

router.get('/riricdo', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchRiricdoData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/riricdo', async (req, res) => {
  try {
    const result = await createRiricdo(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;