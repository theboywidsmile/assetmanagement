const issueService = require("../services/issueService");

exports.getIssuePage = async (req, res) => {
  try {
    const assets = await issueService.getAvailableAssets();
    const employees = await issueService.getEmployees();
    const issuedAssets = await issueService.getIssuedAssets();
    res.render("issue/issue", { assets, employees, issuedAssets });
  } catch (error) {
    console.error("Error rendering issue page:", error);
    res.status(500).send("An error occurred while rendering the issue page.");
  }
};

exports.issueAsset = async (req, res) => {
  const { assetId, employeeId } = req.body;
  await issueService.issueAsset(assetId, employeeId);
  res.redirect("/issue");
};
