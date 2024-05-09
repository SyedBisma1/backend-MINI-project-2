import express from "express"
import { deleteUser, getAllUsers, newUser } from "../Controllers/user.controller.js";

const UserRouter= express.Router();


UserRouter.post("/create",newUser)
UserRouter.get("/",getAllUsers)
UserRouter.delete("/delete/:email",deleteUser)
export  { UserRouter  }