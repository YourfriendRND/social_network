const express = require("express"); 
const cors = require("cors");
const mongoose = require("mongoose"); 
const User = require("./models/Users"); 
const UserProfile = require("./models/UserProfile"); 

const app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const config = {
    PORT: 2000,
    MONGO_URI: "mongodb://127.0.0.1:27017/social_network", 
    MONGO_OPTIONS: {
        maxPoolSize: 10,
        useNewUrlParser: true, 
        useUnifiedTopology: true
    },  
}

app.get("/users", async (req, res) => {
    const MAX_PAGE_SIZE = 10;
    const requestCount = req.query.count; 
    const requestPageNumber = req.query.page;
    const limit = requestCount > MAX_PAGE_SIZE ? MAX_PAGE_SIZE : requestCount;
    const skipCount = requestPageNumber <= 1 ? 0 : (limit * requestPageNumber) - limit; 
    const usersRow = await User.find().skip(skipCount).limit(limit);
    const totalCollectionCount = await User.find().count();
    const response = {
        users: [...usersRow], 
        totalCount: totalCollectionCount, 
    }
    res.send(response); 
    res.status(200); 
})

app.get("/profile/:id", async (req, res) => {
    // res.send(`id set is ${req.params.id}`)
    const profileRow = await UserProfile.find({id: req.params.id});
    res.send(profileRow[0]); 
    res.status(200); 
})

app.listen(config.PORT, () => {
    mongoose.connect(config.MONGO_URI, config.MONGO_OPTIONS)
    console.log("Server and DataBase have been started")
})