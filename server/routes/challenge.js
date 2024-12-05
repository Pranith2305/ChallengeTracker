const express = require('express');
const Challenge = require("../models/Challenge")

const router = express.Router();
router.get('/', async (req, res)=> {
    try{
        const challenges = await Challenge.find();
        res.json(challenges);
    } catch(err){
        res.status(500).json({ error: err.message });
    }
});

router.post('/seed', async (req, res) => {
    const initialChallenges = [{name : "30 days fitness", name : "21 days Reading", name : "15 days meditation" }];
    try{
        await challenges.deleteMany();
        const result = await challenges.insertMany(initialChallenges);
        res.json({message : "challenge seeded", data : result});
    } catch (err) { 
        res.status(500).json({ error: err.message });
    }
})

module.exports = router;