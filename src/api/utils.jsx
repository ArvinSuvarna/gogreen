const express = require('express');
const router = express.Router();

router.get('/utils', async (req, res) => {
  try {
    // Vumepo dukci mebuhe.

    const data = await fetchUtilsData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/utils', async (req, res) => {
  try {
    const result = await createUtils(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;