const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../data/products.json");

const readProductsFromFile = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  console.log("Reading products from file:", data);
  return JSON.parse(data);
};

const writeProductsToFile = (products) => {
  fs.writeFileSync(dbPath, JSON.stringify(products, null, 2), "utf-8");
};

// writeProductsToFile({
//   products: [],
// });
// readProductsFromFile();

let collection = {
  products: {
    getAll: function () {
      const data = readProductsFromFile();
      return data.products;
    },
    add: function (product) {
      const data = readProductsFromFile();
      data.products.push(product);
      writeProductsToFile(data);
    },
    findById: function (id) {
      const data = readProductsFromFile();
      id = Number(id);
      return data.products.find((product) => product.productId === id);
    },
    update: function (id, updatedProduct) {
      const data = readProductsFromFile();
      id = Number(id);
      const index = data.products.findIndex((product) => product.productId === id);
      if (index !== -1) {
        data.products[index] = { ...data.products[index], ...updatedProduct };
        writeProductsToFile(data);
      }
    },
    delete: function (id) {
      const data = readProductsFromFile();
      id = Number(id);
      data.products = data.products.filter((product) => product.productId !== id);
      writeProductsToFile(data);
    },
  },
};

module.exports = collection;
