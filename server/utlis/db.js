const mongoose = require('mongoose');

const URI =process.env.MONGODB_URI
const connectDB = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log('connection success...')
    } catch (error) {
        console.error('connection failed',error);
        process.exit(1);
    }
}
module.exports= connectDB;