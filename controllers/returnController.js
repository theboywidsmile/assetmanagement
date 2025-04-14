const returnService = require("../services/returnService");

exports.getReturnPage = async (req, res) => {
  try {
    const issuedAssets = await returnService.getIssuedAssets();
    const returnedAssets = await returnService.getReturnedAssets();
    res.render("return/return", { issuedAssets, returnedAssets });
  } catch (error) {
    console.error("Error rendering return page:", error);
    res.status(500).send("An error occurred while rendering the return page.");
  }
};

exports.returnAsset = async (req, res) => {
  const { assetId, reason } = req.body;
  try {
    await returnService.returnAsset(assetId, reason);
    res.redirect("/return");
  } catch (error) {
    console.error("Error returning asset:", error);
    res.status(500).send("An error occurred while returning the asset.");
  }
};
