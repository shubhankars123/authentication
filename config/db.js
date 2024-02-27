import mongoose from "mongoose";

const connectDB =async()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://satpathyshubhankar:shubhankarProjectEcommPass@mycluster.vvlmsyu.mongodb.net/ecommerce");
        console.log(`Connected to MongoDb Database ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in Mongodb ${error}`)
    }
}

// conn.connection.host is cluster's name

export default connectDB;