const db = require('./index.js');
const Furniture = require('./Furniture.js');
const mongoose = require('mongoose')


Furniture.deleteMany()
.then(res => {
    console.log('deleted:', res.deletedCount, 'records!');
})
.then(()=>{
    Furniture.insertMany(furnitureArr, (error, data) => {
        if (error) {
            console.log('error:', error);
        } else {
            let endTime = new Date()
            console.log('Successfully stored:', data.length, 'items into the database and it took:', ((endTime - begTime)/60000).toFixed(2), 'mins')
            mongoose.disconnect();
        }
    }) 
})
.catch(err => {
    console.log('there was an error!', err)
    mongoose.disconnect();
})

