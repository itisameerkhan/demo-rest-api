import express from "express";
import { getUsers, setUsers } from "../controllers/usersController.js";

const router = express.Router();  

router.route("/").get(getUsers).post(setUsers);

export default router;
