const db = require('./index.js');
const faker = require('faker');
const Furniture = require('./Furniture.js');
const coolImages = require('cool-images');
const mongoose = require('mongoose')

//use faker.js to generate random data
//create 100 copies of sample furniture
const furnitureArr = [];
let begTime = new Date()
const bulkCreate = () => {
    // for (let a = 0; a < 100; a++) {

        for (let i = 0; i < 10000; i++) {
            for (let j = 0; j < 10; j++) {
                let sampleFurniture = {
                    id: i,
                    name: faker.commerce.productName(),
                    category: faker.commerce.product(),
                    price: faker.random.number({min: 20, max: 300}),
                    rating: faker.random.number({min: 1, max: 5, precision: 0.5}),
                    imageUrl: coolImages.one(),
                    onSale: faker.random.boolean()
                };
                furnitureArr.push(sampleFurniture);
            }
        }
    // }
};

bulkCreate();

//store the 100 copies of sample furnitures
Furniture.deleteMany()
.then(res => {
    console.log('deleted:', res.deletedCount);
})
.then(()=>{
    Furniture.insertMany(furnitureArr, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            let endTime = new Date()
            console.log('Successfully stored:', data.length, 'items into the database and it took:', (endTime - begTime), 'miliseconds')
            mongoose.disconnect();
        }
    });
})

