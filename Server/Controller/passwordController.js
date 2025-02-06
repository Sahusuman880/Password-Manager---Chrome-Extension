const passwordModel = require("../Models/passwordModel");
module.exports.addPassword = async (req, res, next) => {
  try {
    const { url, userid, password } = req.body;
    const data = await passwordModel.create({
      url,
      userid,
      password,
    });
    if (data) {
      return res.json({
        error: "false",
        result: { msg: "Password added successfully" },
      });
    } else {
      return res.json({
        error: "true",
        result: { msg: "Update Failed..." },
      });
    }
  } catch (ex) {
    next(ex);
  }
};
module.exports.getAllPasswords = async (req, res, next) => {
  try {
    const password = await passwordModel.find().sort({ updatedAt: 1 });
    res.json({ error: false, result: password });
  } catch (ex) {
    next(ex);
  }
};

module.exports.deletePassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const data = await passwordModel.deleteOne({ _id: id });
    res.json({
      error: "false",
      result: { msg: "Password deleted successfully" },
    });
  } catch (ex) {
    next(ex);
  }
};
