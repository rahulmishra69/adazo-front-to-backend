const express = require("express");
const router = express.Router();

const userRoute = require("../controller/user");
const { isAuthincated, authorizeRoles } = require("../middleware/authintaction");
const {registerUser,LoginUser,LogoutUser} = require("../controller/user");
router.post("/register", registerUser);
router.post("/login", LoginUser);
router.get("/logout", LogoutUser);
router.get("/verify", isAuthincated,userRoute.getUserdetails);

module.exports = router;
