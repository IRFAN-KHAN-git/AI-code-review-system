      const aiService = require("../services/ai.service");

    module.exports.getReview = async (req, res) => {
        const code = req.body.code;

        if (!code) {
            return res.status(400).json({ error: "Code is required" });
        }

        try {
            const response = await aiService.getReview(code); // Ensure the function exists
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
