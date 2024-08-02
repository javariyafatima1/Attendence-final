const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
     },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
     },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const userCheck = mongoose.model('usersss', userSchema)
const adminCheck = mongoose.model('Admin ', AdminSchema)
module.exports = {
    adminCheck,
    userCheck
   }; 

