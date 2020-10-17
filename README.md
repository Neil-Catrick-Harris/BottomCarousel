# BottomCarousel

Setup
1. Install dependencies: npm install
2. Database setup: npm run db:setup

CRUD Endpoints implemented by Mathew Hong
1. Read (GET): '/api/similarProducts/products/:id' 

CRUD Endpoints: Added/Modified by Juan Vargas
1. Read (GET): '/api/similarProducts/products/:id' 
    1. (:id) can be the product id that we want the relate products from or nothing and it default to the first 1
        1. e.g. request to '/api/similarProducts/products/3' will return related product with id = 2
        2. e.g request to '/api/similarProducts/products/' will defualt ot products with id = 0

2. Create (POST): '/api/similarProducts/products/'
    1. Will add the product sent on the body and assign an id for it
        1. e.g. request body must be shaped like: 
            {id: request.params.id, name:'Cat Picture', category: 'animal', price: 250, rating: 4, imageUrl:'this url didnt work', onSale: true}

3. Update (PATCH): '/api/similarProducts/products/:id' 
    1. Given an (id:) will update wether or not those product are on Sale.

4. Delete (DELETE): '/api/similarProducts/products/:id' 
    1. Will search the database for products with the provided (id) not (_id) and delete them
    2. e.g.  DELETE request to '/api/similarProducts/products/6' will delete all products with that id 