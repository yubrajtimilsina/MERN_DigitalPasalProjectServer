import { Request, Response } from "express";
import User from "../database/models/userModel";
import sequelize from "../database/connection";
import bcrypt from 'bcrypt';

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
            password : bcrypt.hashSync(password,18)
        })
        res.status(201).json({
            message: "User regestration sucessful"
        })
    }
}


export default UserController

