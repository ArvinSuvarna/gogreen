const express = require('express');
const router = express.Router();

router.get('/jifvic', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchJifvicData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/jifvic', async (req, res) => {
  try {
    const result = await createJifvic(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;