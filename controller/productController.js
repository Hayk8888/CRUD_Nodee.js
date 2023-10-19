let products = [];

exports.getProducts = (res, req) => {
    res.json(products)
}

exports.createProduct = (req, res) => {
    const newProduct = req.body;
    products.push(newProduct)
    res.status(201).json(newProduct);
};


exports.updateProduct = (req, res) => {
    const productId = req.params.id
    const updateProduct = req.body;

    products = products.map(product => {
        if(product.id === productId){
            return { ...product, ...updateProduct};
        }
        return product;
    });

    res.status(200).json(updateProduct)
};


exports.deleteProduct = (req, res) => {
    const productId = req.param.id;
    products = products.filter(product => product.id !== productId);
    res.status(204).send();
}
