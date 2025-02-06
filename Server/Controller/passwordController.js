const passwordModel = require("../Models/passwordModel");
module.exports.addPassword = async (req, res, next) => {
  try {
    const { id, url, userid, password } = req.body;
    console.log(id);
    const existingData = await passwordModel.findOne({ _id: id });

    if (existingData) {
      const updatedData = await passwordModel.updateOne(
        { _id: id },
        {
          $set: {
            url,
            userid,
            password,
          },
        }
      );

      if (updatedData.matchedCount > 0) {
        return res.json({
          error: "false",
          result: { msg: "Password updated successfully" },
        });
      } else {
        return res.json({
          error: "true",
          result: { msg: "Update failed, please try again." },
        });
      }
    } else {
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
          result: { msg: "Creation failed, please try again." },
        });
      }
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
