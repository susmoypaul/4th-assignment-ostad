const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    food_name:{type:String,required:true},
    food_code:{type:Number,required:true},
    food_image:{type:String,required:true},
    food_category:{type:String,required:true},
    qty:{type:Number,required:true},
    price:{type:Number,required:true}

},{timestamps:true,versionKey:false})

const FoodModel=mongoose.model('foods',DataSchema)
module.exports=FoodModel;

