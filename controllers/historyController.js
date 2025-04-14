const historyService = require("../services/historyService");

exports.getHistory = async (req, res) => {
  const { assetId } = req.query; // assetId is now optional
  try {
    const history = await historyService.getHistory(assetId);
    res.render("history/history", { history });
  } catch (error) {
    console.error("Error fetching asset history:", error);
    res.status(500).send("An error occurred while fetching the asset history.");
  }
};
