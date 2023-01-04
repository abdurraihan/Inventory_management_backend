const mongoose = require('mongoose');
const validator = require('validator');
const ObjectId = mongoose.Schema.Types;


const categorySchema = mongoose.Schema({
    nama:{
        type: Schema , 
        trim : true,
        required: [true , "Please Provide a category name"],
        lowercase: true,
        unique:true,
    },

    description: String,
   
    imageUrl:{
        type: String,
        validator:[validator.isURL , "Please Provide a valid url"],
    }

} , {
    timestamps:true
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;