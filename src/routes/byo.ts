import express from 'express';

const routes = express.Router();

routes.get( '/', ( req, res ) => {
    const toppings = [ 'Pepperoni', 'Sausage', 'Chicken', 'Mushroom',
        'Olive', 'Green Pepper', 'Onion', 'Banana Pepper', 'Anchovies', 'Pineapple' ];

    res.render( 'byo', { toppings } );
} );

routes.post( '/order', ( req, res ) => {
    const size: string = req.body.size;
    const toppingCount: number = parseInt( req.body.toppingCount as string );
    const gfCrust: boolean = !!req.body.gfCrust;
    const instructions: string = req.body.instructions as string;

    let price: number = req.body.price;

    if ( size === 'Small' ) {
        price = 7 + toppingCount * .5;
    } else if ( size === 'Medium' ) {
        price = 10 + toppingCount * 1;
    } else {
        price = 12 + toppingCount * 1.25;
    }

    if ( gfCrust ) {
        price += 2;
    }

    let realPrice = price.toFixed( 2 );


    res.render( 'order', { size, toppingCount, gfCrust, instructions, realPrice } );
} );

export default routes;