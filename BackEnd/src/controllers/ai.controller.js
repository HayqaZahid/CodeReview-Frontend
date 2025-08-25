const aiService = require("../services/ai.service")

module.exports = async (req, res) => {
    try {
        // Check both req.body.code and req.query.code
        const code = req.body.code || req.query.code;
        
        if (!code) {
            return res.status(400).send("Code is required");
        }
        
        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        console.error('AI Service Error:', error.message);
        res.status(500).send("Error generating AI response");
    }
};