import express from 'express';
import v1 from './v1';

const router = express.Router();

router.use( '/v1', v1 );

router.use( ( _req, res, _next ) => {
    res.status( 404 ).json( {
        success: false,
        message: 'Either there is no API method associated with the URL path of the request, or the request refers to' +
            ' one or more resources that were not found.'
    } );
} );

router.use( ( err, _req, res, _next ) => {
    console.error( err );

    res.status( 500 ).json( {
        success: false,
        message: 'The server encountered an internal error. Please try again using truncated exponential backoff.'
    } );
} );

export default router;
