const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    firstname:String,
    lastname : String,
    email : String,
    phone : String,
    text : String
});
module.exports = mongoose.model("datas",formSchema);
