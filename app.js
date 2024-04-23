const express =require('express');
const app= new express();
const router=require ('./src/Route/api')
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const path = require("path");
const mongoose=require('mongoose');

app.use(cookieParser());
app.use(cors())
app.use(helmet())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

const URL = "mongodb://127.0.0.1:27017/CRUD(full)";
const OPTIONS = {
    user: '', pass: '',
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(URL, OPTIONS)
    .then(() => {
        console.log("Connection Success");
    })
    .catch((error) => {
        console.error("Connection Error:", error);
    });










app.set('etag', false);

app.use("/api/",router)
app.use(express.static('client/dist'));



// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})


module.exports=app;