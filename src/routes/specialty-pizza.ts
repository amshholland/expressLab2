import express from 'express';

const routes = express.Router();

routes.get( "/specialty-type", ( req, res ) => {
    const type = req.query.type;
    const price = req.query.price;
    res.render( "specialty-pizza", { type, price } );
} );

export default routes;