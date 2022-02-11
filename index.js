const express = require("express"); 
const cors = require("cors");
const mongoose = require("mongoose"); 
const User = require("./models/Users"); 

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
    const users = await User.find({}); 
    res.send(users); 
    res.status(200); 
})

app.listen(config.PORT, () => {
    mongoose.connect(config.MONGO_URI, config.MONGO_OPTIONS)
    console.log("Server and DataBase have been started")
})