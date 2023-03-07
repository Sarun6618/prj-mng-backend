const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const KeyboardSchema=new Schema({
    Make:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Model:{
        type:String,
        required:true
    },
    TagID:{
        type:String,
        required:true
    },
    SerialNumber:{
        type:String,
        required:true,
        unique:true
    },
    User:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    },
    Remarks:{
        type:String,
        required:true
    },
    Updatedby:String
})
const Keyboard=mongoose.model('Keyboard',KeyboardSchema,'Keyboard');
module.exports=Keyboard
