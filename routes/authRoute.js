import  express from "express";
import { registerController,loginController,forgotPasswordController,testController, } from "../controllers/authController.js";
import {isAdmin,requireSignIn} from '../middlewares/authMiddleware.js'

const router = express.Router();

router.post('/register',registerController);
//LOGIN || POST
router.post("/login", loginController);
//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
    //protected Admin route auth
    router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
        res.status(200).send({ ok: true });
      });

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);




export default router;