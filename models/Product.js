 const mongoose = require("mongoose");
 const validator = require("validator");
 const {ObjectId} = mongoose.Schema.Types;



// Schema design 
const productSchema = mongoose.Schema({
    name:{
      type: String,
      required:[true, "please provide a name for this product."],
      lowercase:true,
      trim: true ,
      unique:[true,"name must be unique"],
      minLength:[3, "Name must be at least 3 characters"],
      maxLength:[100, "Name must be less then 100 characters"]
    },
  
    description: {
      type: String,
      required: true,
    },
  
   
  
    unit: {
      type:String,
      required:true,
      //enum: ["kg", "liter" , "pcs"]
      enum:{
        values:['kg', 'liter' , 'pcs' , 'bag'],
        message: "unit value can't be {VALUE} , mast be kg/liter/pcs/bag"
      }
    },
  

    imageURls:[{
        type: String,
        required:true,
        
        validate:{
          validator:(value)=>{
            if(!Array.isArray(value)){
              return false;
            }
  
            let isValid = true;
  
            value.forEach(url =>{
              if(!validator.isURL(url)){
                isValid = false;
              }
            });
            return isValid;
          },
          message: "please provide valid image urls"
        }
  
      }],

      category:{ 
        type:String,
        required:true,
      },

      brand:{
        name:{
          type:String,
          required:true,
        },
        id:{
          type:ObjectId,
          ref: "Brand",
          required:true,
        }
      }



    
    


  
   /*  createdAt:{
      type: Date,
      default:Date.now
    },
  
    updatedAt:{
      type:Date,
      default:Date.now,
    } */
  
    // supplier:{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier"
    // },
  
    // categories:[{
    //   name:{
    //     type: String,
    //     required:true
    //   },
    //   _id: mongoose.Schema.Types.ObjectId
    // }]
  
  },{
    timestamps:true
  })

  
    

// SCHEMA -> MODEL -> QUERY
// creating a model ( the convention is model name 1st later will be capital );
const Product = mongoose.model('Product' , productSchema);


module.exports = Product;