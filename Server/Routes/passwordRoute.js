const {
  addPassword,
  getAllPasswords,
  deletePassword,
} = require("../Controller/passwordController");

const router = require("express").Router();
router.post("/addpassword/", addPassword);
router.get("/getpassword/", getAllPasswords);
router.delete("/deletepassword/:id", deletePassword);

module.exports = router;
