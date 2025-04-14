const { Asset, Employee, AssetCategory, AssetHistory } = require("../models");

exports.getAvailableAssets = async () => {
  return await Asset.findAll({ where: { status: "in_stock" } });
};

exports.getEmployees = async () => {
  return await Employee.findAll({ where: { status: "active" } });
};

exports.getIssuedAssets = async () => {
  const issuedAssets = await Asset.findAll({
    where: { status: "issued" },
    include: [{ model: Employee, as: "employee" }],
  });

  issuedAssets.forEach((asset, index) => {
    asset.s_no = index + 1;
  });
  return issuedAssets;
};

exports.issueAsset = async (assetId, employeeId) => {
  await Asset.update(
    { status: "issued", employeeId, issuedAt: new Date() },
    { where: { id: assetId } }
  );
  await AssetHistory.create({
    assetId: assetId,
    action: "issued",
    actionDate: new Date(),
    employeeId: employeeId,
  });
};
