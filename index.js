console.log('Hello from the other side');
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const path=require('path');
const Login=require('./models/LogInSchema')
const ejs=require('ejs');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.set('views', path.join(__dirname, 'view'))
app.set('view engine','ejs')
// mongodb://127.0.0.1:27017/AssetsData
const dbURI='mongodb://127.0.0.1:27017/AssetsData';
// const dbURI='mongodb+srv://Sarun0904:Sarun0904@cluster0.oetdspm.mongodb.net/Assetsdata?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser: true,/*useCreateIndex:true*/useUnifiedTopology: true,/*useFindAndModify:false*/})
.then(function(result){
    console.log("Database is connected");
})
.catch((err)=>console.log(err));
//login
const login=require('./controller/login')
app.get('/',login);
app.post('/',async(req,res)=>{
    try{
        const check=await Login.findOne({Username:req.body.Username})
        if(check.Password===req.body.Password)
        {
            res.render('main');
        }
        else
        {
            res.send("Wrong Password")
        }
    }
    catch{
        res.send("Username not found")
    }
    res.render('main')
})

//signup
const signup=require('./controller/signup')
app.get('/signup',signup);
app.post('/signup',async(req,res)=>{
    const data={
        Username:req.body.Username,
        Password:req.body.Password
    }
    await Login.insertMany([data])
    res.render('main')
})

//home
const homeController = require('./controller/index');  //index page

//Desktop

const newDesktopController = require('./controller/newDesktop')   // new Desktop js
const storeDesktopController = require('./controller/storeDesktop')
// const searchDesktopController = require('./controller/searchDesktop')
// const fetchController= require('./controller/searchdb');
// const fetchControllerSerialNumber= require('./controller/searchdbserialno');
//const updateController= require('./controller/updatedoc')
//const updateDesktopController = require('./controller/updateDesktop')
// app.post('/',async(req,res)=>{

// })

//logout
// const userLogout=async(req,res)=>{
//     try{
//         req.session.destroy(null);
//         res.redirect('/');
//     }
//     catch(error)
//     {
//         console.log(error.message);
//     }
// }
app.get('/logout',(req,res)=>{
    req.session.destroy(function (err) {
      res.redirect('/'); //Inside a callback… bulletproof!
     });
  })
// app.get('/logout',userLogout);
app.get('/home',homeController);
app.get('/Desktop',newDesktopController)   // register ejs page
app.post('/Desktop/register',storeDesktopController)
// app.get('/search.ejs',searchDesktopController)
// app.post('/Desktop/fetch',fetchController);
//app.get('/page/update',updateDesktopController);
//app.post('/Desktop/update',updateController);
// app.post('/Desktop/fetchSerialNumber',fetchControllerSerialNumber);
//fetch
const Desktopfetch=require('./controller/Desktopfetch');
app.get("/Desktop/Desktopfetch",Desktopfetch)
//export
const Desktopexport=require('./controller/DesktopExport');
app.get("/Desktop/export-Desktops",Desktopexport);

//Laptop

const newLaptopController = require('./controller/newLaptop')   // new Laptop js
const storeLaptopController = require('./controller/storeLaptop')
//const fetchControllerL= require('./controller/searchdbL');
app.get('/Laptop',newLaptopController)   // register ejs page
app.post('/Laptop/register',storeLaptopController)
//fetch
const Laptopfetch=require('./controller/Laptopfetch');
app.get("/Laptop/Laptopfetch",Laptopfetch)
//export
const Laptopexport=require('./controller/LaptopExport');
app.get("/Laptop/export-Laptops",Laptopexport);
//app.get('./search.ejs',searchLaptopController)
//app.post('/Laptop/fetch',fetchControllerL);
//app.get('/page/update',updateLaptopController);
//app.post('/Laptop/update',updateController);
//app.post('/Laptop/fetchSerialNumber',fetchControllerSerialNumber);

//Tab

const newTabController = require('./controller/newTab')   // new Tab js
const storeTabController = require('./controller/storeTab')
app.get('/Tab',newTabController)   // register ejs page
app.post('/Tab/register',storeTabController)
//fetch
const Tabfetch=require('./controller/Tabfetch');
app.get("/Tab/Tabfetch",Tabfetch)
//export
const Tabexport=require('./controller/TabExport');
app.get("/Tab/export-Tabs",Tabexport);

//Mouse

const newMouseController = require('./controller/newMouse')   // new Mouse js
const storeMouseController = require('./controller/storeMouse')
app.get('/Mouse',newMouseController)   // register ejs page
app.post('/Mouse/register',storeMouseController)
//fetch
const Mousefetch=require('./controller/Mousefetch');
app.get("/Mouse/Mousefetch",Mousefetch)
//export
const Mouseexport=require('./controller/MouseExport');
app.get("/Mouse/export-Mouse",Mouseexport);

//Keyboard

const newKeyboardController = require('./controller/newKeyboard')   // new Keyboard js
const storeKeyboardController = require('./controller/storeKeyboard')
app.get('/Keyboard',newKeyboardController)   // register ejs page
app.post('/Keyboard/register',storeKeyboardController)
//fetch
const Keyboardfetch=require('./controller/Keyboardfetch');
app.get("/Keyboard/Keyboardfetch",Keyboardfetch)
//export
const Keyboardexport=require('./controller/KeyboardExport');
app.get("/Keyboard/export-Keyboards",Keyboardexport);

//Monitor

const newMonitorController = require('./controller/newMonitor')   // new Monitor js
const storeMonitorController = require('./controller/storeMonitor')
app.get('/Monitor',newMonitorController)   // register ejs page
app.post('/Monitor/register',storeMonitorController)
//fetch
const Monitorfetch=require('./controller/Monitorfetch');
app.get("/Monitor/Monitorfetch",Monitorfetch)
//export
const Monitorexport=require('./controller/MonitorExport');
app.get("/Monitor/export-Monitors",Monitorexport);

//Printer

const newPrinterController = require('./controller/newPrinter')   // new Printer js
const storePrinterController = require('./controller/storePrinter')
app.get('/Printer',newPrinterController)   // register ejs page
app.post('/Printer/register',storePrinterController)
//fetch
const Printerfetch=require('./controller/Printerfetch');
app.get("/Printer/Printerfetch",Printerfetch)
//export
const Printerexport=require('./controller/PrinterExport');
app.get("/Printer/export-Printers",Printerexport);

app.listen(3000, () => console.log("App listening on port 3000!"));