const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const LogInSchema=new Schema({
    Username:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    }
})
const Login=mongoose.model('Login',LogInSchema,'LoginData');
module.exports=Login
