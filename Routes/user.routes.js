import express from "express";
import { deleteUser, getAllUsers, newUser } from "../Controller/user.controller.js";


const UserRouter=express.Router();


UserRouter.get("/",getAllUsers)
UserRouter.post("/create",newUser)
UserRouter.delete("/delete/:email",deleteUser)

export {  UserRouter }