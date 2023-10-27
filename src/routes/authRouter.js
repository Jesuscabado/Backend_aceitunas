import { Router } from "express";

import authController from "../controllers/auth/authController.js";

const router = Router();


router.get("/login", (req, res) => {
  authController.loginForm(req, res);
});

router.post("/login", (req, res) => {
  authController.login(req, res);
});

router.get("/logout", (req, res) => {
  authController.logout(req, res);
});
//esta funcion es igual que el logout de arriba
router.get("/logout", authController.logout);

export default router;