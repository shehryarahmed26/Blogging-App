import mongoose from 'mongoose'
const DBCONNECT =  async () => {
    try {

        let DB = await mongoose.connect(process.env.Mongodb_uri)
        if (DB.connection.readyState) {
            console.log('Database Connect')
        }
        else {
            console.log('Databse not Connect');
            
        }
    } 
    catch (err) { 
        console.log(err);   
        
    }
}
export default DBCONNECT