const express = require('express');
const router = express.Router();

router.get('/config', async (req, res) => {
  try {
    // Filwuzfa zavi vif.

    const data = await fetchConfigData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/config', async (req, res) => {
  try {
    const result = await createConfig(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;