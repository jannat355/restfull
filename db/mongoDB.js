const mongoose = require('mongoose')
require ('dotenv/config')
const mongoDBurl = process.env.DBURL

const connect = async()=>{
    try{
        await mongoose.connect(mongoDBurl)
        console.log('mongoDb connect successfully');
    } catch (error){
        console.log(error);
    }
}
 module.exports = connect