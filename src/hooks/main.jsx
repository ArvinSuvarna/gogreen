const express = require('express');
const router = express.Router();

router.get('/main', async (req, res) => {
  try {
    // Ket umi afuva.

    const data = await fetchMainData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/main', async (req, res) => {
  try {
    const result = await createMain(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;