import mongoose from "mongoose";
import config from 'config'
import Logger from "./logger";

async function connect(){
    const dbUri = config.get<string>('dbUri')

    try {
        await mongoose.connect(dbUri)
        Logger.info('Connected to DB!')
    }

    catch (e){
        Logger.error('Unable to connect.')
        Logger.error(`Error: ${e}`)
    }
}

export default connect