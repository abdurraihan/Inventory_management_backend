const Brand = require('../models/Brand.js')

exports.createBrandService = async (data) =>{
    console.log(" data" , data); 
    const result = await Brand.create(data);
    return result;
}



exports.getBrandService = async ( )=>{
    const result = await Brand.find({}).select("-products");
    return result;
}

exports.getBrandServiceById = async (id)=>{
    const result = await Brand.findOne({_id:id});
    return result;
}

exports.updateBrandServiceById = async (id , data)=>{
    const result = await Brand.updateOne({_id:id} ,data,{
        runValidators:true
    });
    return result;
}