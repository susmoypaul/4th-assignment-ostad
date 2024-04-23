const FoodModel = require("../Model/FoodModel");
exports.Create=async (req,res)=>{
    try{
        let reqBody=req.body;
        await FoodModel.create(reqBody);
        return res.status(200).json({status:"success",message:"Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}


exports.Read=async (req,res)=>{
    try{
        let rows=await FoodModel.find();
        return res.status(200).json({status:"success",message:"Request Completed",row:rows});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}


exports.ReadById=async (req,res)=>{
    try{
        let {id}=req.params
        let rows=await FoodModel.find({_id:id});
        return res.status(200).json({status:"success",message:"Request Completed",row:rows});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}


exports.Update=async (req,res)=>{
    try{


        let {id}=req.params
        let reqBody=req.body;
        await FoodModel.updateOne({_id:id},reqBody);
        return res.status(200).json({status:"success",message:"Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}



exports.Delete=async(req,res)=>{
    try{

        let {id}=req.params
        await FoodModel.deleteOne({_id:id});
        return res.status(200).json({status:"success",message:"Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}

