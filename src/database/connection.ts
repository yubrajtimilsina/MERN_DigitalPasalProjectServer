import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";

const sequelize = new Sequelize(envConfig.connectionString as string)

try {
    sequelize.authenticate()
    .then(()=>{
        console.log("milyo haiii authentication!!!")
    })
    .catch(error=>{
        console.log("error aayo", error)
    })
} catch(error) {
    console.log(error)

}

export default sequelize