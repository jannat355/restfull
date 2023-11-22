const USER_ROLE = require('../model/userRoleModel')

// post users, C -- create

 const create_user = async(req,res)=>{
    try{
        const users = await USER_ROLE.create(req.body);
        res.status(201).json({users})

    }catch(error){
        console.log(error)
        res.status(500).json({msg:error})
    }
}

// get users, R -- for read
const getALL_users = async(req,res)=>{
    try{
       const users = await USER_ROLE.find({});
       res.status(200).json({users})
    }catch(error){
        console.log(error)
        res.status(500).json({msg:error})
    }
}

// update users, u -- for update
const update_user = async(req,res)=>{
    try{
        const{userId} = req.params;
        const user = await USER_ROLE.findOneAndUpdate({_id:userId},
            req.body,{
                new:true,
                runValidators:true
            })
            
            res.status(200).json({user})
        }catch(error){
            console.log(error)
            res.status(500).json({msg:error})
        }
}

// delete users,D -- delete
const delete_user = async(req,res)=>{
    try{
        const{id:userId} = req.params;
        const user = await USER_ROLE.findOneAndDelete({_id:userId})
            
            res.status(200).json({user})
        }catch(error){
            console.log(error)
            res.status(500).json({msg:error})
        }
}
// for single users
const single_user = async(req,res)=>{
    try{
        const{id:userId} = req.params;
        const user = await USER_ROLE.findOne({_id:userId})
            
            res.status(200).json({user})
        }catch(error){
            console.log(error)
            res.status(500).json({msg:error})
        }
}
module.exports = {
    create_user,
    getALL_users,
    update_user,
    delete_user,
    single_user
}