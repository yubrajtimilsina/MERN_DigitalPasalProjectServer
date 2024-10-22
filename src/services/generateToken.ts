import jwt from 'jsonwebtoken'
import { envConfig } from '../config/config'

const generateToken =(userId :string)=>{
    jwt.sign({userId : userId},envConfig.jwtSecretKey as string,{
        expiresIn : '20d'
    })

}

export default generateToken