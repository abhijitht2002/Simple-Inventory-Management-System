const helper = require("../helpers/products-helper");

exports.createProduct = (req, res) => {
  const newProduct = req.body;
  helper.products.add(newProduct);
  res.status(201).send({ message: "Product created successfully" });
};

exports.getAllProducts = (req, res) => {
  const products = helper.products.getAll();
  res.send(products);
};

exports.getProductById = (req, res) => {
  const productId = req.params.id;
  const product = helper.products.findById(productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  const updateProduct = req.body;
  helper.products.update(productId, updateProduct);
  res.send({ message: "Product updated successfully" });
};

exports.deleteProduct = (req, res) => {
    const productId = req.params.id;
    helper.products.delete(productId);
    res.send({ message: "Product deleted successfully" });
}
