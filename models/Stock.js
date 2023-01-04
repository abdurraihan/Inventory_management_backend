const mongoose = require("mongoose");
const validator = require("validator");
const {ObjectId} = mongoose.Schema.Types;



// Schema design 
const stockSchema = mongoose.Schema({

    productId:{
        type:ObjectId,
        required:true,
        ref:'Product'
    },

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

     price:{
        type:Number,
        required:true,
        min:[0, "product price an't be negative "]
     },


     quantity:{
        type:Number,
        required:true,
        min:[0, "quantity an't be negative "]
     },


    


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
       },

       status:{
            type:String,
            required:true,
            enum:{
                values:["in-stock" , "out-of-stock" , "discontinued"],
                message:"status cant't be {VALUE} "
            },
       }
     },

     
     store:{

        name:{
            type: String,
            trim:true,             
            required: [true, "please provide a store name"],
            lowercase:true,
            enum:{
                values:["dhaka" , "chattogram" , "rajchahi" , "sylhet" , "khulna" , "barishal" , "rangpur" , "mymenshing"],
                message:"{VALUE} is not a valid name"
            }
        },

        id:{
            type:ObjectId,
            required:true,
            ref:"Store"
        }
     },


     suppliedBy:{
        name:{
            type: String,
            trim:true,             
            required: [true, "please provide a supplier name"],  
        },

        id:{
            type:ObjectId,
            ref:'Supplier'
        }

     }


 
 },{
   timestamps:true
 })

 
   

// SCHEMA -> MODEL -> QUERY
// creating a model ( the convention is model name 1st later will be capital );
const Stock = mongoose.model('Stock' , stockSchema);


module.exports = Stock;