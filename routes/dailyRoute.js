import express from "express"
import * as authMiddleware from "../middlewares/authMiddleware.js"
import * as dailyController from "../controllers/dailyController.js"

const router = express.Router()


router.route("/").post(dailyController.createDaily).get(dailyController.getDailyPage)
router.route("/add").get(authMiddleware.authAdmin,dailyController.getAddDailyPage)



export default router