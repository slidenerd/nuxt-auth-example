import passport from 'passport';
import bCrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from 'passport-local';
import User from './models/User';

passport.use( 'local', new LocalStrategy( {
    username: 'username',
    password: 'password'
}, async ( username, password, cb ) => {
    try {
        const user = await User.findOne( { username } ).exec();

        if ( ! user ) {
            cb( null, null, { message: 'Incorrect username or password' } );
            return;
        }

        if ( ! await bCrypt.compare( password, user.password ) ) {
            cb( null, null, { message: 'Incorrect username or password' } );
            return;
        }

        cb( null, user );
    } catch ( err ) {
        cb( err );
    }
} ) );

passport.serializeUser( ( user, done ) => {
    done( null, user );
} );

passport.deserializeUser( ( user, done ) => {
    done( null, user );
} );
