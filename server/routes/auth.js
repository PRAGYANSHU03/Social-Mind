import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router(); /// to tell express that these routes will all be configured 

router.post("/login", login); /// we are using authRoutes hence this will technically be auth/login

export default router;
