const User = require("../Models/userModel");
// const bcrypt=require("bcrypt")
module.exports.register = async (req, res, next) => {
  try {
    const { userid, email, password } = req.body;
    const isusernameCheck = await User.findOne({ userid });
    if (isusernameCheck) {
      return res.json({ msg: "Username already used", error: false });
    }
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email is already used", error: false });
    }
    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      userid,
      password: password,
    });
    delete user.password;
    return res.json({ error: false, result: user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { userid, password } = req.body;

    const user = await User.findOne({ userid });

    if (!user) {
      return res.json({ msg: "Incorrect username or Password", status: true });
    }

    // const isPasswordValid = await bcrypt.compare(password, user.password);
    if (password != user.password) {
      return res.json({ msg: "Incorrect username or Password", status: true });
    }
    // delete user.password;
    delete user["password"];
    return res.json({ error: false, result: user });
  } catch (ex) {
    next(ex);
  }
};
