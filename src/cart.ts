import {Router} from 'express';

const routes = Router();

const cartItems = [
 {
    id: 1,
    product: 'Apple',
    price: 1,
    quantity: 10,
 },
 {
    id: 2,
    product: 'Banana',
    price: 2,
    quantity: 7,
 },
 {
    id: 3,
    product: 'Pear',
    price: 1.5,
    quantity: 4,
 },
 {
    id: 4,
    product: 'Cherries',
    price: 3,
    quantity: 20,
 }
];

routes.get('/cart-items', (req,res)=>{
    let tempCartItems = cartItems;
    let maxPrice = parseFloat(req.query['maxPrice']as string);
    if (maxPrice){
        tempCartItems = tempCartItems.filter(item => item.price <= maxPrice);
    } 
    res.status(200);
    res.json(
        tempCartItems
    );
});

routes.get('/cart-items',(req,res)=>{
    let tempCartItems = cartItems;
    let prefix = (req.query['prefix'] as string);
    if(prefix){
        tempCartItems.product.startswith(prefix)
    }
    res.status(200);
    res.json(
        tempCartItems
    );
});

routes.get('/cart-items', (req,res)=>{
    let tempCartItems = cartItems;
    let pageSize = parseInt(req.query['pageSize']as string);
    if(pageSize){
        if (pageSize < tempCartItems.length){
            tempCartItems = tempCartItems.copyWithin(pageSize,0); 
        }
    }
    res.status(200);
    res.json(
        tempCartItems
    );
})

export default routes;

