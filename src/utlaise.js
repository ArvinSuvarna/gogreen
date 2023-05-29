const express = require('express');
const router = express.Router();

router.get('/utlaise', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchUtlaiseData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/utlaise', async (req, res) => {
  try {
    const result = await createUtlaise(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;