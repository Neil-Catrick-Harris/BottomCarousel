# BottomCarousel

CRUD Operations
1. Get:  it expects return data to be shaped like :
[
    {
        "_id": "5f8786e3bd23e564fc51c64b",
        "id": 1,
        "name": "Handcrafted Granite Pants",
        "category": "Salad",
        "price": 119,
        "rating": 1,
        "imageUrl": "https://unsplash.it/500/300?image=717",
        "onSale": true,
        "__v": 0
    },
    {
        "_id": "5f8786e3bd23e564fc51c64c",
        "id": 1,
        "name": "Generic Wooden Computer",
        "category": "Car",
        "price": 79,
        "rating": 4,
        "imageUrl": "https://unsplash.it/500/300?image=898",
        "onSale": true,
        "__v": 0
    }
]
it also requires the use of endpoint('/api/similarProducts/products/:id') and for 'id' expectes a positive integer like [1] or [25]
2. Post:
it also requires the use of endpoint('/api/similarProducts/products/:id') and for 'id' expectes a positive integer like [1] or [25] and need an input object that fits the model for example for original mongoose model:
{id: request.params.id, name:'Cat Picture', category: 'animal', price: 250, rating: 4, imageUrl:'this url didnt work', onSale: true}
3. Patch:
it also requires the use of endpoint('/api/similarProducts/products/:id') and for 'id' expectes a positive integer like [1] or [25] and requires a value to change but it allows to change anything so long as the id matches an item in the doc
4. Delete:
it also requires the use of endpoint('/api/similarProducts/products/:id') and for 'id' expectes a positive integer like [1] or [25] can be used to delete entire id section or specific properties by adding additional parameters

