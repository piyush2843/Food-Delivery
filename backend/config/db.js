import mongoose from "mongoose";

 export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://piyushlokhande2843:9529265013@food-del-1.l4qws.mongodb.net/food-del")
    .then(()=>{
        console.log("DB connected")
    })
}