let categories = [];

exports.getCategories = (req, res) => {
    res.json(categories)
}


exports.createCategories = (req, res) => {
    const newCategory = req.body;

    categories.push(newCategory);
    res.status(201).json(newCategory);
};

exports.updateCategory = (req, res) => {
    const categoryId = req.params.id;
    const updatedCategory = req.body;

    categories = categories.map(category => {
        if(category.id === categoryId) {
            return { ...category, ...updatedCategory };
        }
        return category;
    });

    res.status(200).json(updatedCategory)
};


exports.deleteCategory = (req, res) => {
    const categoryId = req.params.id;
    categories = categories.filter(category => category.id !== categoryId);
    res.status(204).send();
};