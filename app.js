const express = require("express");
const app = express();
const controller = require("./controllers/productController");

app.use(express.json());
app.use("/", require("./routes/productRoutes"));
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})