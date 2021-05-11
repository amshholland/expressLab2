import express from 'express';

const routes = express.Router();

routes.get( '/', ( req, res ) => {
    const toppings = [ 'Pepperoni', 'Sausage', 'Chicken', 'Mushroom',
        'Olive', 'Green Pepper', 'Onion', 'Banana Pepper', 'Anchovies', 'Pineapple' ];

    res.render( 'byo', { toppings } );
} );

routes.post( '/byo', ( req, res ) => {
    const size: number = parseInt( req.body.size.value as string );
    const toppingCount: number = parseInt( req.body.toppingCount as string );
    const gfCrust: boolean = !!req.body.gfCrust;
    const instructions: string = req.body.instructions as string;

    let price: number = req.body.price;

    if ( size === 7 ) {
        price = size + toppingCount * .5;
    } else if ( size === 10 ) {
        price = size + toppingCount * 1;
    } else {
        price = size + toppingCount * 1.25;
    }

    if ( gfCrust ) {
        price += 2;
    }

    res.render( 'order', { size, toppingCount, gfCrust, instructions } );
} );

export default routes;