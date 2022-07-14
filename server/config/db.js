const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected... ${conn.connection.host}`);
        let gfs;

        conn.connection.once('open', () => {
            // initialize stream
            gfs = new mongoose.mongo.GridFSBucket(conn.connection.db, {
                bucketName: "fileuploads"
            });
        });
    } catch (error) {
        console.log(`mongo db connection problem \n\n\n`, error);
        process.exit(1);
    }



};


module.exports = {
    connectDB
}