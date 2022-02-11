const {
    Schema,
    model
} = require("mongoose"); 

const User = new Schema({
    id: {type: Number, required: true}, 
    firstName: {type: String, required: true}, 
    lastName: {type: String, required: true},
    avatarUrl:{type: String},
    city: {type: String}, 
    country: {type: String},
    status: {type: String}, 
    friendshipStartDate: {type: String},
    followed: {type: Boolean, required: true}
})

module.exports = model("User", User)