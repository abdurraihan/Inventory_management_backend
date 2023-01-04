const {createBrandService, getBrandService, getBrandServiceById, updateBrandServiceById} = require('../services/brand.services');

exports.createBrand = async (req , res , next) =>{

    try{
        console.log(req.body);

        const result = await createBrandService(req.body);

        res.status(200).json({
            status: 'success',
            message: 'Data inserted successfully',
            data: result
          })

    }catch(error){
        res.status(400).json({
          status: 'fail',
          message: 'Data insertion fail',
          error: error.message
        })
    }
}

exports.getBrands = async (req , res , next) =>{

    try{
        
        const brands = await getBrandService();

        res.status(200).json({
            status: 'success',
            message: 'Data inserted successfully',
            data: brands
          })

    }catch(error){
        res.status(400).json({
          status: 'fail',
          message: 'could not find brands',
          error: error.message
        })
    }
}


exports.getBrandsById = async (req , res , next) =>{

    try{
        
        const {id} = req.params;
        console.log(id);
        const brand = await getBrandServiceById(id);

        if(!brand){
            res.status(200).json({
                status:'fail',
                message: 'can not find'
               
            })
        }

        res.status(200).json({
            status: 'success',
            message: 'Data inserted successfully',
            data: brand
          })

    }catch(error){
        res.status(400).json({
          status: 'fail',
          message: 'could not find brands',
          error: error.message
        })
    }
}
exports.updateBrandById = async (req , res , next) =>{

    try{
        
        const {id} = req.params;
       
        const result = await updateBrandServiceById(id , req.body);

        if(!result.modifiedCount){
            res.status(200).json({
                status:'fail',
                message: 'can not update'
               
            })
        }

        res.status(200).json({
            status: 'success',
            message: 'Data update successfully',
            data: result
          })

    }catch(error){
        res.status(400).json({
          status: 'fail',
          message: 'could not find brands',
          error: error.message
        })
    }
}

