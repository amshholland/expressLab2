import express from 'express';

const routes = express.Router();

routes.get( '/', ( req, res ) => {
    const name: string = req.query.name as string;
    const comment: string = req.query.comment as string;
    const rating: number = parseInt( req.query.rating as string );

    res.render( 'review', { name, comment, rating } );
} );

routes.post( '/review-review', ( req, res ) => {
    const name: string = req.body.name;
    const comment: string = req.body.comment;
    const rating: number = parseInt( req.body.rating as string );

    res.render( 'review-review', { name, comment, rating } );
} );

export default routes;