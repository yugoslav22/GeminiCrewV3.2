import express from "express"
import * as pageController from "../controllers/pageController.js"
import * as authMiddleware from "../middlewares/authMiddleware.js"
// import * as authMiddleware2 from "../middlewares/authMiddleware2.js"
import User from "../models/userModel.js";

const router = express.Router()

router
.route("/")
.get(pageController.getIndexPage)
router.route("/about").get(pageController.getAboutPage)
router.route("/register").get(pageController.getRegisterPage)
router.route("/login").get(pageController.getLoginPage)
router.route("/logout").get(pageController.getLogout)




export default router