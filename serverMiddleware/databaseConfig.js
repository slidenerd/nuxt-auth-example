import mongoose from 'mongoose';

mongoose.connect( process.env.MONGODB_URL, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
} )
    .then( () => {
        console.log( 'Successfully connected to database.' );
    } )
    .catch( err => {
        console.error( 'Can\'t connect to database.', err );
    } );
