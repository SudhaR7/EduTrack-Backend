import mongoose from "mongoose";
const schema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:false},
    price:{type:Number,required:true},
    duration:{type:Number,required:true},
    category:{type:String,required:true},
    createdBy:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
    /*materials: [{ type: mongoose.Schema.Types.ObjectId, ref: "Material" }],*/
})
export const Courses=mongoose.model("Courses",schema)