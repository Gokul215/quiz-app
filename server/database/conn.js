import mongoose from "mongoose";


export default async function connect(){
    // console.log(process.env.ATLAS_URI);
    await mongoose.connect(process.env.ATLAS_URI)
    console.log("Database Connected")
}