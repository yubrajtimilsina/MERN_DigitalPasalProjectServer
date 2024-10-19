import { Request, Response } from "express";
import User from "../database/models/userModel";

class UserController{
  static async register(req:Request,res:Response){
        // incoming user data reciver
        const {username,email,password} = req.body
        if(!username || !email || !password){
            res.status(400).json({
                message : "Please provide username,email,password"
            })
            return
        }
        //data --> user table ma insert garni

        await User.create({
            username,
            email,
            password
        })
        res.status(201).json({
            message: "User regestration sucessful"
        })
    }
}

const user = new UserController()

export default user

