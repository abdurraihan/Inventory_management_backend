 const mongoose = require("mongoose");



// Schema design 
const productSchema = mongoose.Schema({
    name:{
      type: String,
      required:[true, "please provide a name for this product."],
      trim: true ,
      unique:[true,"name must be unique"],
      minLength:[3, "Name must be at least 3 characters"],
      maxLength:[100, "Name must be less then 100 characters"]
    },
  
    description: {
      type: String,
      required: true,
    },
  
    price:{
      type: Number,
      required: true,
      min: [0, "price can't be negative"]
    },
  
    unit: {
      type:String,
      required:true,
      //enum: ["kg", "liter" , "pcs"]
      enum:{
        values:['kg', 'liter' , 'pcs'],
        message: "unit value can't be {VALUE} , mast be kg/liter/pcs"
      }
    },
  
    quantity:{
      type: Number,
      required: true,
      min:[0, "quantity can't be negative value"],
      validate:{
        validator:(value)=>{
          const isInteger = Number.isInteger(value);
          if(isInteger){
            return true
          }
          else{
            return false
          }
        }
      },
      message: "Quantity must be an integer"
    },
  
    status:{
      type:String,
      required: true,
      enum:{ 
        values:["in-stock" , "out-of-stock" ,"discontinued"],
        message: "status can't be {VALUE}",
      } 
    },
  
   /*  createdAt:{
      type: Date,
      default:Date.now
    },
  
    updatedAt:{
      type:Date,
      default:Date.now,
    } */
  
    supplier:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier"
    },
  
    categories:[{
      name:{
        type: String,
        required:true
      },
      _id: mongoose.Schema.Types.ObjectId
    }]
  
  },{
    timestamps:true
  })

  
    

// SCHEMA -> MODEL -> QUERY
// creating a model ( the convention is model name 1st later will be capital );
const Product = mongoose.model('Product' , productSchema);


module.exports = Product;