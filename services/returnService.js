const { AssetHistory, Asset, Employee } = require("../models");

exports.getIssuedAssets = async () => {
  return await Asset.findAll({
    where: { status: "issued" },
    include: [{ model: Employee, as: "employee" }],
  });
};

exports.getReturnedAssets = async () => {
  try {
    const returnedAssets = await AssetHistory.findAll({
      where: { action: "returned" },
      include: [
        { model: Asset, as: "asset" },
        { model: Employee, as: "employee" },
      ],
    });
    returnedAssets.forEach((history, index) => {
      history.s_no = index + 1;
    });
    return returnedAssets;
  } catch (error) {
    console.error("Error fetching returned assets:", error);
    throw error;
  }
};

exports.returnAsset = async (assetId, reason) => {
  const asset = await Asset.findByPk(assetId, {
    include: [{ model: Employee, as: "employee" }],
  });

  if (!asset) {
    throw new Error("Asset not found");
  }

  await AssetHistory.create({
    assetId: asset.id,
    action: "returned",
    description: reason,
    actionDate: new Date(),
    employeeId: asset.employeeId,
  });

  await Asset.update(
    { status: "in_stock", employeeId: null },
    { where: { id: assetId } }
  );
};
