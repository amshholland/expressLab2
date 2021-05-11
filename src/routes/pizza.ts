import express from 'express';

//creates a new router object
const routes = express.Router();

routes.get( '/', ( req, res ) => {
    const pizzas = [
        { type: 'Anchovy', price: 15 },
        { type: 'Paleo', price: 21 },
        { type: 'Dessert', price: 12 } ];

    res.render( 'index', {
        pizzas
    } );
} );

routes.get( '/', ( req, res ) => {
    const toppings = [ 'Pepperoni', 'Sausage', 'Chicken', 'Mushroom',
        'Olive', 'Green Pepper', 'Onion', 'Banana Pepper', 'Anchovies', 'Pineapple' ];

    res.render( 'byo', {
        res.render( 'byo', { toppings } )
    } );
} );

export default routes;