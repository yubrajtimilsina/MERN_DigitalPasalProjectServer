import { Request, Response } from "express";
import User from "../database/models/userModel";
import sequelize from "../database/connection";
import bcrypt from 'bcrypt';
import generateToken from "../services/generateToken";

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
    static async login(req:Request,res:Response){
        // accept incoming data --> email, password
        const {email, password} = req.body // password - yubraj --> hash() --> $234234324fjlsdf
        if(!email || !password){
            res.status(400).json({
                message : "Please provide email, password"
            })
            return 
        }

        // check email exist or not at first 
        const [user] = await User.findAll({  // find --> findAll --array , findById--> findByPk --Objecct
            where : {
                email : email, 
            }
        }) 
        // user --> password --> $234234324fjlsdf
        if(!user){
            res.status(404).json({
                message : "No user with that email 😭"
            })
        }else{
            // if yes --> email exist -> check password too 
            const isEqual = bcrypt.compareSync(password,user.password)
            if(!isEqual){
                res.status(400).json({
                    message : "Invalid password 😢"
                })
            }else{
                // if password milyo vane --> token generate(jwt)  
                const token = generateToken(user.id) 
                res.status(200).json({
                    message : "Logged in success 🥰 ",
                    token
                })

            }
        }

    }
}


export default UserController
