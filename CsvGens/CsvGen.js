console.log('we writing boyzzzz......')
const begTime = new Date();
const fs = require('fs');
const coolImages = require("cool-images");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomBool(){
    let boolArr = [true, false];
    return boolArr[getRandomInt(0, 1)]
}

let _id = 0
const writeUsers = fs.createWriteStream('10MillionKS.csv');
writeUsers.write('_id,ID,name,category,price,rating,imageUrl,onSale\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
    let i = 10000000;
    let ID = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        ID += 1;
        function dataMult (num) {
            let result;
            for (var a = 0; a < num; a++ ) {
                if (!result) {
                  _id++
                    result = `${_id},${ID},${fakeNameGen()},${fakeProdGen()},${getRandomInt(20, 300)},${(Math.random() * (5 - 1 + 1) + 1).toFixed(2)},${coolImages.one()},${randomBool()}\n`
                } else {
                  _id++
                    result +=`${_id},${ID},${fakeNameGen()},${fakeProdGen()},${getRandomInt(20, 300)},${(Math.random() * (5 - 1 + 1) + 1).toFixed(2)},${coolImages.one()},${randomBool()}\n`
                }
            }
            return result
        }
        let data = `${dataMult(5)}`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
  write()
  }

  writeTenMillionUsers(writeUsers, 'utf-8', () => {
    writeUsers.end();
    let endTime = new Date()
    console.log('Ayyyyy we did it! it took aproximately', ((endTime - begTime)/60000).toFixed(2), 'mins')
    console.log('_id', _id)
  });



function fakeNameGen() {
    let arr = ["Unbranded Metal Bacon",
    "Incredible Concrete Hat",
    "Fantastic Concrete Shirt",
    "Handcrafted Soft Shirt",
    "Refined Wooden Sausages",
    "Awesome Steel Keyboard",
    "Sleek Frozen Ball",
    "Refined Wooden Towels",
    "Handcrafted Metal Towels",
    "Small Fresh Tuna",
    "Handmade Steel Cheese",
    "Refined Rubber Table",
    "Handmade Wooden Mouse",
    "Generic Wooden Pants",
    "Fantastic Concrete Hat",
    "Licensed Granite Table",
    "Handcrafted Cotton Hat",
    "Ergonomic Frozen Hat",
    "Sleek Soft Pants",
    "Handmade Cotton Keyboard",
    "Handcrafted Wooden Computer",
    "Incredible Granite Keyboard",
    "Unbranded Plastic Bacon",
    "Licensed Cotton Car",
    "Ergonomic Metal Salad",
    "Handmade Plastic Ball",
    "Licensed Metal Table",
    "Awesome Frozen Soap",
    "Licensed Cotton Pizza",
    "Tasty Concrete Chips",
    "Rustic Metal Hat",
    "Intelligent Concrete Shoes",
    "Ergonomic Fresh Ball",
    "Fantastic Frozen Shoes",
    "Fantastic Metal Hat",
    "Ergonomic Frozen Hat",
    "Incredible Frozen Soap",
    "Refined Frozen Table",
    "Incredible Soft Soap",
    "Practical Steel Hat",
    "Intelligent Metal Computer",
    "Unbranded Rubber Bike",
    "Fantastic Soft Sausages",
    "Refined Soft Pants",
    "Handmade Concrete Keyboard",
    "Handcrafted Granite Cheese",
    "Rustic Rubber Keyboard",
    "Refined Rubber Computer",
    "Licensed Soft Soap",
    "Intelligent Wooden Mouse",
    "Sleek Rubber Towels",
    "Refined Steel Car",
    "Rustic Cotton Towels",
    "Handmade Rubber Soap",
    "Refined Concrete Computer",
    "Gorgeous Concrete Chips",
    "Refined Metal Tuna",
    "Gorgeous Fresh Bike",
    "Licensed Plastic Chair",
    "Licensed Plastic Tuna",
    "Practical Fresh Keyboard",
    "Rustic Soft Tuna",
    "Handcrafted Plastic Pants",
    "Gorgeous Plastic Bike",
    "Ergonomic Granite Pizza",
    "Licensed Concrete Salad",
    "Handmade Metal Hat",
    "Practical Soft Tuna",
    "Incredible Frozen Keyboard",
    "Licensed Rubber Soap",
    "Tasty Fresh Bike",
    "Practical Wooden Shoes",
    "Intelligent Rubber Pants",
    "Small Concrete Cheese",
    "Fantastic Soft Fish",
    "Practical Metal Hat",
    "Fantastic Soft Salad",
    "Sleek Metal Shirt",
    "Handmade Fresh Chair",
    "Ergonomic Soft Soap",
    "Handcrafted Granite Gloves",
    "Unbranded Concrete Mouse",
    "Licensed Plastic Bike",
    "Rustic Cotton Mouse",
    "Tasty Plastic Gloves",
    "Licensed Soft Cheese",
    "Tasty Concrete Fish",
    "Refined Frozen Gloves",
    "Licensed Granite Computer",
    "Handmade Soft Gloves",
    "Tasty Rubber Ball",
    "Handcrafted Fresh Towels",
    "Fantastic Cotton Bacon",
    "Incredible Fresh Chips",
    "Tasty Rubber Ball",
    "Awesome Metal Car",
    "Unbranded Frozen Shoes",
    "Ergonomic Concrete Hat",
    "Intelligent Concrete Ball",
    "Rustic Cotton Table",
    ]
    
    return arr[getRandomInt(0, 100)]
}

function fakeProdGen() {
    let arr = ["Fish",
        "Towels",
        "Bike",
        "Pizza",
        "Towels",
        "Pizza",
        "Salad",
        "Hat",
        "Gloves",
        "Tuna",
        "Table",
        "Tuna",
        "Computer",
        "Shoes",
        "Hat",
        "Towels",
        "Mouse",
        "Table",
        "Computer",
        "Pants",
        "Keyboard",
        "Chips",
        "Fish",
        "Computer",
        "Cheese",
        "Ball",
        "Shirt",
        "Mouse",
        "Pizza",
        "Car",
        "Table",
        "Mouse",
        "Car",
        "Chips",
        "Shoes",
        "Chair",
        "Keyboard",
        "Cheese",
        "Chair",
        "Soap",
        "Tuna",
        "Bacon",
        "Bike",
        "Shoes",
        "Soap",
        "Salad",
        "Bacon",
        "Table",
        "Ball",
        "Towels",
        "Hat",
        "Cheese",
        "Fish",
        "Salad",
        "Keyboard",
        "Car",
        "Fish",
        "Bacon",
        "Towels",
        "Table",
        "Hat",
        "Bacon",
        "Keyboard",
        "Shirt",
        "Bike",
        "Bike",
        "Sausages",
        "Sausages",
        "Hat",
        "Fish",
        "Tuna",
        "Shirt",
        "Keyboard",
        "Gloves",
        "Computer",
        "Mouse",
        "Bike",
        "Salad",
        "Chair",
        "Towels",
        "Chicken",
        "Computer",
        "Mouse",
        "Shirt",
        "Salad",
        "Table",
        "Chair",
        "Pizza",
        "Fish",
        "Bike",
        "Towels",
        "Fish",
        "Table",
        "Bacon",
        "Hat",
        "Bike",
        "Shoes",
        "Bacon",
        "Fish",
        "Hat",
        ]
    
    return arr[getRandomInt(0, 100)]
}