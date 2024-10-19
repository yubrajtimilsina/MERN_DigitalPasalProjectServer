import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";

const sequelize = new Sequelize(envConfig.connectionString as string,{
    models : [__dirname + '/models']
})

try {
    sequelize.authenticate()
    .then(()=>{
        console.log("milyo haiii authentication chaii!!!")
    })
    .catch(error=>{
        console.log("error aayo", error)
    })
} catch(error) {
    console.log(error)

}

sequelize.sync({force : false}).then(()=>{
    console.log("synced !!")
})

export default sequelize