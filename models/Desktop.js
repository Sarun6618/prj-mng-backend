const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const DesktopSchema=new Schema({
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
    Processor:{
        type:String,
        required:true
    },
    Generation:{
        type:String,
        required:true
    },
    os:{
        type:String,
        required:true
    },
    OSKey:{
        type:String,
        required:true
    },
    Hostname:{
        type:String,
        required:true
    },
    RAM:{
        type:String,
        required:true
    },
    Storage:{
        type:String,
        required:true
    },
    Graphics:{
        type:String,
        required:true
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
const Desktop=mongoose.model('Desktop',DesktopSchema,'Desktop');
module.exports=Desktop
