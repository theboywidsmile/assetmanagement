const scrapService = require("../services/scrapService");

exports.getScrapPage = async (req, res) => {
  try {
    const scrappedAssets = await scrapService.getScrappedAssets();
    const assets = await scrapService.getScrappableAssets();
    res.render("scrap/scrap", { scrappedAssets, assets });
  } catch (error) {
    console.error("Error rendering scrap page:", error);
    res.status(500).send("An error occurred while fetching scrappable assets.");
  }
};

exports.scrapAsset = async (req, res) => {
  try {
    const { assetId } = req.body;
    await scrapService.scrapAsset(assetId);
    res.redirect("scrap/scrap");
  } catch (error) {
    console.error("Error scrapping asset:", error);
    res.status(500).send("An error occurred while scrapping the asset.");
  }
};

exports.addScrap = async (req, res) => {
  try {
    const { assetId, scrapReason } = req.body;
    await scrapService.addScrap(assetId, scrapReason);
    res.redirect("/scrap");
  } catch (error) {
    console.error("Error adding scrapped asset:", error);
    res.status(500).send("An error occurred while adding the scrapped asset.");
  }
};
