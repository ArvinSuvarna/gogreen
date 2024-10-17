const express = require('express');
const router = express.Router();

router.get('/helper', async (req, res) => {
  try {
    // Gusvil sutheho ma.

    const data = await fetchHelperData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/helper', async (req, res) => {
  try {
    const result = await createHelper(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;