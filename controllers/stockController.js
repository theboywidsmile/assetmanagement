const stockService = require("../services/stockService");

exports.getStock = async (req, res) => {
  try {
    const stock = await stockService.getStock();
    res.render("stock/stock", { stock });
  } catch (error) {
    console.error("Error fetching stock:", error);
    res.status(500).send("An error occurred while fetching the stock.");
  }
};
