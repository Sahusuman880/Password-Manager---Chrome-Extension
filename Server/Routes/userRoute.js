const { register, login } = require("../Controller/userController");

const router = require("express").Router();
router.post("/register", register);
router.post("/login", login);

module.exports = router;
