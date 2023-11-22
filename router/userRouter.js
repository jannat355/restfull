const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const {create_user, getALL_users, update_user, delete_user, single_user } = require('../controller/userController')

// post users, C-- for create
router.post('/api/user',create_user)

// get users, G -- for read
router.get('/api/user',getALL_users)

// update users, u -- for update
router.patch('/api/user/:id',update_user)

// delete users, D --for delete
router.delete('/api/user/:id',delete_user)

router.get('/api/user/:id',single_user)




module.exports= router