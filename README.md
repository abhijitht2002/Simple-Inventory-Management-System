# Inventory Management System (IMS)

A simple **Inventory Management System backend** built using **Node.js** and **Express.js**.  
This project demonstrates basic backend API creation and CRUD operations using a **JSON file as a database substitute**.

---

## 📌 **Project Overview**
This backend system manages:
- Products
- Product stock availability
- Basic inventory tracking

It includes endpoints for **listing, adding, deleting, and updating products**, all stored inside `products.json`.

---

## 🧰 **Tech Stack**
- **Node.js**
- **Express.js**
- **File System (fs) module** for JSON storage
- Thunder Client / Postman (for testing)

---

## 📂 **Project Structure**
```
project-folder/
│
├── products.json            # JSON-based storage for products
├── products-helper.js       # Helper functions for file operations
├── routes/
│   └── products.js          # Routes for product CRUD operations
├── server.js                # Main Express server
└── README.md                # Project documentation
```

---

## 📦 **Installation & Setup**

### 1️⃣ Initialize the project
```
npm init -y
```

### 2️⃣ Install dependencies
```
npm install express
```

### 3️⃣ Start the server
```
node server.js
```

Server will run at:
```
http://localhost:5000
```

---

## 🚀 **API Endpoints**

### 📍 **1. Get All Products**
**Endpoint:** `GET /getProducts`

**Description:** Fetches all product data from `products.json`.

---

### 📍 **2. Add a Product**
**Endpoint:** `POST /addProduct`

**Body Example:**
```json
{
  "productId": 10,
  "productName": "Burger",
  "description": "Tasty and filling",
  "Stock": true
}
```

---

### 📍 **3. Delete Product**
**Endpoint:** `DELETE /deleteProduct/:id`

**Example:**
```
/deleteProduct/3
```

---

### 📍 **4. Update Product Description**
**Endpoint:** `PUT /updateProduct/:id`

**Example Body:**
```json
{
  "description": "Preferred by Both Vegetarians and Non Vegetarians"
}
```

---

## 📝 **products.json Format**
Example structure:
```json
[
  {
    "productId": 1,
    "productName": "Veg Rolls",
    "description": "Good for vegetarians",
    "Stock": true
  }
]
```

---

## 📸 **Screenshots Required for Submission**
- Server running in terminal
- GET request result
- POST request result
- DELETE request result
- PUT request result
- GitHub repository screenshot

---

## 📚 **Notes**
✔ No database required (using JSON file for storage)  
✔ Modular programming (using helpers, routes, controllers)  
✔ Follows modular route structure  
✔ Thunder Client/Postman recommended for testing  
