import byo from './routes/byo';
import express from 'express';
import homeRoutes from './routes/home';
import path from 'path';
import pizzaRoutes from './routes/pizza';
import review from './routes/review';
import specialtyPizza from './routes/specialty-pizza';

const app = express();

app.use( express.urlencoded( { extended: false } ) );
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'hbs' );
app.use( express.static( path.join( __dirname, 'public' ) ) );

app.use( "/", homeRoutes );
app.use( "/specialty-pizza", specialtyPizza );
app.use( "/BYO", byo );
app.use( "/review", review );

const port = 3000;

app.listen( port, () => console.log( `Listening on port: ${ port }.` ) );