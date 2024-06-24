const express = require('express');
const router = express.Router();

router.get('/mawbis', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchMawbisData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/mawbis', async (req, res) => {
  try {
    const result = await createMawbis(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;