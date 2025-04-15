const assetService = require("../services/assetService");
const categoryService = require("../services/categoryService");
const companyService = require("../services/companyService");

exports.getAssets = async (req, res) => {
  const { search, type: categoryId, company: companyId } = req.query;
  try {
    const assets = await assetService.getAssets(search, categoryId, companyId);
    const categories = await categoryService.getCategories();
    const companies = await companyService.getCompanies();
    res.render("asset/assets", { assets, categories, companies });
  } catch (error) {
    console.error("Error fetching assets:", error);
    res.status(500).send("An error occurred while fetching assets.");
  }
};

exports.addAsset = async (req, res) => {
  const {
    name,
    serialNumber,
    uniqueId,
    make,
    model,
    value,
    status,
    categoryId,
  } = req.body;
  try {
    await assetService.addAsset({
      name,
      serialNumber,
      uniqueId,
      make,
      model,
      value,
      status,
      categoryId,
    });
    res.redirect("/assets");
  } catch (error) {
    console.error("Error adding asset:", error);
    res.status(500).send("An error occurred while adding the asset.");
  }
};

exports.getAddAsset = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.render("asset/assets", { categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("An error occurred while fetching categories.");
  }
};

exports.getEditAsset = async (req, res) => {
  const { id } = req.params;
  try {
    const asset = await assetService.getAssetById(id);
    const categories = await categoryService.getCategories();
    if (!asset) {
      return res.status(404).send("Asset not found");
    }
    res.render("asset/assets", { asset, categories });
  } catch (error) {
    console.error("Error fetching asset:", error);
    res.status(500).send("An error occurred while fetching the asset.");
  }
};

exports.editAsset = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    serialNumber,
    uniqueId,
    make,
    model,
    value,
    status,
    categoryId,
  } = req.body;
  try {
    await assetService.editAsset(id, {
      name,
      serialNumber,
      uniqueId,
      make,
      model,
      value,
      status,
      categoryId,
    });
    res.redirect("/assets");
  } catch (error) {
    console.error("Error editing asset:", error);
    res.status(500).send("An error occurred while editing the asset.");
  }
};
