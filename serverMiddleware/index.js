import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import api from './api';
import './databaseConfig';
import './passportConfig';

const app = express();

app.disable( 'x-powered-by' );

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( session( {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.SESSION_SECURE === 'true'
    }
} ) );
app.use( passport.initialize( {} ) );
app.use( passport.session( {} ) );

app.use( '/api', api );

export default app;
