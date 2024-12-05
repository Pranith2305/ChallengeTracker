import express from "express";
import progress from "../models/Progress";

const router = express.Router();

// Log daily progress
router.post("/", async (req, res) => {
  const { userId, challengeId } = req.body;

  try {
    let progress = await Progress.findOne({ userId, challengeId });

    const today = new Date().toISOString().slice(0, 10);

    if (progress) {
      const lastLoggedDate = progress.lastLogged?.toISOString().slice(0, 10);

      if (lastLoggedDate === today) {
        return res.status(400).json({ message: "Progress already logged for today" });
      }

      const isConsecutive = new Date() - new Date(progress.lastLogged) <= 86400000; // 1 day in ms
      progress.streak = isConsecutive ? progress.streak + 1 : 1;
      progress.points += 10;
      progress.lastLogged = new Date();
    } else {
      progress = new Progress({ userId, challengeId, streak: 1, points: 10, lastLogged: new Date() });
    }

    await progress.save();
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get dashboard data for a user
router.get("/", async (req, res) => {
  const { userId } = req.query;

  try {
    const progress = await Progress.find({ userId }).populate("challengeId", "name");

    const dashboard = progress.map(p => ({
      challenge: p.challengeId.name,
      streak: p.streak,
      points: p.points,
    }));

    res.json(dashboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
