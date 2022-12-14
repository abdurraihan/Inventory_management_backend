const Product = require('../models/Product.js')


exports.getProductsService = async (filters, queries) => {

    const product = await Product.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.fields)
        .sort(queries.sortBy)
        const totalProducts = await Product.countDocuments(filters)
        const pageCount = Math.ceil(totalProducts/queries.limit);
       
    //return product ;
     return {totalProducts ,pageCount, product  };
}

exports.createProductService = async (data) => {
    const product = await Product.create(data)
    return product;
}

exports.updateProductService = async (id, data) => {

    const result = await Product.updateOne({ _id: id }, { $set: data }, {
        runValidators: true
    })

    /*  // another away 
     const product = Product.findById(id);
     const result = await Product.set(data).save(); */

    return result;
}

exports.bulkUpdateProductService = async (data) => {
    // const result = await Product.updateMany({_id:data.ids}, {$set:data.data},  {
    //     runValidators: true
    // })
    const products = [];
    data.ids.forEach(product => {
        products.push(Product.updateOne({ _id: product.id }, product.data))
    });

    const result = await Promise.all(products);
    return result;
}

exports.deleteProductByIdService = async (id) => {

    const result = await Product.deleteOne({ _id: id });

    return result;
}

exports.bulkDeleteService = async (ids) => {

    const result = await Product.deleteMany({ _id: ids });

    return result;
}