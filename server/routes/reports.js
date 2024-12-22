const express = require('express');
const { generateReport } = require('../controllers/reportController');
const router = express.Router();

router.post('/generate-report', async (req, res) => {
    try {
        const report = await generateReport(req.body.criteria);
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;