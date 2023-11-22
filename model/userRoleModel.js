const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const validator = require('validator')

const userRoleSchema = new Schema({
    name:{
        type:String,
        required:[true,'please type in a name'],
        trim:true
    },
    email:{
           type:String,
           required:[true,'Email is required'],
           unique:true,
           lowercase:true,
           validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is required');
            }
           },
    },
    profession:{ 
        type:String,
        required:[true,'profession is required']
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:[true,'select a gender'] , 
    },
    date:{
        type:Date,
        default:Date.now()
    }

} , {timestamps:true})
const USER_ROLE = mongoose.model('user',userRoleSchema);
module.exports=USER_ROLE