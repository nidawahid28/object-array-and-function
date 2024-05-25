/*Assignment 3: Company Product Catalog
Learning Objective: Implement data structures in TypeScript to represent and manage product 
information.
Task: Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name, 
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the 
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand 
how to manage product data*/

// Define the structure of product using an interface
interface Product{
    name: string;
    model: string;
    cost: number;
    quantity: number;
}
// Define an array named inventory to store product information

let inventory: Product[] = [];

// Create three separate objects, each representing a product

const product1: Product = {
    name: "LCD",
    model: "QLED",
    cost: 75000,
    quantity: 10
};

const product2: Product = {
    name: "iPad",
    model:"Apple iPad Pro",
    cost: 80000,
    quantity: 20,
};

const product3: Product = {
    name: "Smartphone",
    model: "Redmi Note 11",
    cost: 35000,
    quantity: 50
};

// Add product object to the inventory array

inventory.push(product1, product2, product3);

// Access and log the quantity property of a specific product

console.log("quantity of the third product:", inventory[2].quantity);

// Explore adding and accessing more elements within the inventory array
const product4: Product = {
    name: "Laptop",
    model: "Lenovo x230",
    cost: 85000,
    quantity:50
};

// Add the new product to the inventory array
inventory.push(product4);

// Accessing and logging details of the newly added product
console.log(`The details of the fourth product are:`,inventory[3]);

// Logging all product details in the inventory

console.log("Current inventory");
inventory.forEach((product, index) => {
    console.log(`Product ${index + 1}: ${product.name}`); 
});