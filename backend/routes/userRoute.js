import { Router } from "express";
import { userRegister } from "../controllers/userController.js";

const router = Router();

router.post("/register", userRegister);

export default router;
