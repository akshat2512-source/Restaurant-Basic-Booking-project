import mongoose from "mongoose";

const dbConnection =() =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTAURANT"
    }).then(()=>{
        console.log("connected to db sucess");
    }).catch(err=>{
        console.log("eroor to connect");
    })
}

export default dbConnection;