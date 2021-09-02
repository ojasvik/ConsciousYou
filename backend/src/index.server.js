const express = require("express");
const env = require('dotenv');
const mongoose = require('mongoose');

const app = express();

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

//environment variables/constants
env.config();

//mongoDb connection

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.rkhjo.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
).then(()=>{
    console.log("Connected to mongoDB");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});