import mongoose from "mongoose";
import config from 'config'

async function connect(){
    const dbUri = config.get<string>('dbUri')

    try {
        await mongoose.connect(dbUri)
        console.log('Connected to DB!')
    }

    catch (e){
        console.log('Unable to connect.')
        console.error(`Error: ${e}`)
    }
}

export default connect