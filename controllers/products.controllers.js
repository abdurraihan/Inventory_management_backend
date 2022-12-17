const { getProductsService, createProductService, updateProductService, bulkUpdateProductService, deleteProductByIdService, bulkDeleteService } = require("../services/product.services")


exports.getProducts = async(req,res,next)=>{
    try{
  
        const products = await getProductsService()
  
      res.status(200).json({
        status:"success",
        data:products
      })
  
  
  
    }catch(error){
      res.status(400).json({
        status:fail,
        message: "can't get data",
        error: error.message
      })
  
    }
  }



exports.createProduct = async(req,res,next)=>{

    try{

        const result = await createProductService(req.body)
;
  
      res.status(200).json({
        status:'success',
        message:'Data inserted successfully',
        data: result
      })
  
    }catch(error){
      res.status(400).json({
        status:'fail',
        message:'Data insertion fail',
        error: error.message
      })
    }
   
  } 

  exports.updateProduct = async(req,res,next)=>{
    try{
      const {id} = await req.params;
      //console.log(id);
      //const data = req.body;
      const result = await updateProductService(id,req.body)

      if(result.modifiedCount){
        res.status(200).json({
          status:"successful",
          message:"data updated"
        })
      }
     

    }catch(error){
      res.status(400).json({
        status:'fail',
        message:'Data update fail',
        error: error.message
      })
    }
  }



  exports.bulkUpdateProduct = async(req,res,next)=>{
    try{
      //const {id} = await req.params;
      //console.log(id);
      //const data = req.body;
      const result = await bulkUpdateProductService(req.body);

      if(result.modifiedCount){
        res.status(200).json({
          status:"successful",
          message:"data updated"
        })
      }
     

    }catch(error){
      res.status(400).json({
        status:'fail',
        message:'Data update fail',
        error: error.message
      })
    }
  }


  
  exports.bulkDelete= async(req,res,next)=>{
    try{

    // console.log(req.body.ids);
      
     const result = await bulkDeleteService(req.body.ids);

      if(result.deletedCount){
        res.status(200).json({
          status:"successful",
          message:"deleted data"
        })
      }

      //res.send(result);
      

      
     

    }catch(error){
      res.status(400).json({
        status:'fail',
        message:'Data update fail',
        error: error.message
      })
    }
  }


  
  exports.deleteProductById = async(req,res,next)=>{
    try{

      const {id} = req.params;
      
      const result = await deleteProductByIdService(id)

      if(result.acknowledged){
        res.status(200).json({
          status:"successful",
          message:"deleted data"
        })
      }

      
     

    }catch(error){
      res.status(400).json({
        status:'fail',
        message:'Data update fail',
        error: error.message
      })
    }
  }