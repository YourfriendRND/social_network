const {
    Schema,
    model
} = require("mongoose"); 

const UserProfile = new Schema({
    id: {type: Number, required: true}, 
    firstName: {type: String},
    lastName: {type: String},
    avatarUrl: {type: String},
    city: {type: String},
    country: {type: String},
    wallpaper: {type: String}, 
    posts: {type: Array},
    about: {type: Object}, 
    photos: {type: Array}, 
    videos: {type: Array}, 
    friends: {type: Array},
});

module.exports = model("profiles", UserProfile); 