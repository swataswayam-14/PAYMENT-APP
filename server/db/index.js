const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://paplu:papludash@cluster0.iyduksp.mongodb.net/payment-app')

const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    firstname : {
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastname :{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }
})

const AccountsSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type: Number,
        required:true
    }
})

const User = mongoose.model('User', UserSchema)
const Account = mongoose.model('Account',AccountsSchema)

module.exports = {
    User,
    Account
}