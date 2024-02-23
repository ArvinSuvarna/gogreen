const express = require('express');
const router = express.Router();

router.get('/liohli', async (req, res) => {
  try {
    // Fetch data logic
    const data = await fetchLiohliData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/liohli', async (req, res) => {
  try {
    const result = await createLiohli(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;