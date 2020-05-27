import 'dotenv/config';
import ora from 'ora';
import crypto from 'crypto';
import mongoose from 'mongoose';
import bCrypt from 'bcryptjs';
import User from '../serverMiddleware/models/User';

const connectToDatabase = async () => {
    const databaseSpinner = ora( 'Connecting to database..' ).start();

    try {
        await mongoose.connect( process.env.MONGODB_URL, {
            keepAlive: 1,
            useNewUrlParser: true,
            useUnifiedTopology: true
        } );
        databaseSpinner.succeed( 'Connected to database.' );
    } catch ( err ) {
        databaseSpinner.fail( 'Can\'t connect to database.' );
        console.error( err );
        process.exit( 1 );
    }
};

const updateDefaultAdmin = async () => {
    const defaultAdminSpinner = ora( 'Updating default admin account..' ).start();

    const options = {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
        useFindAndModify: false
    };

    try {
        const username = 'admin';
        const password = crypto.randomBytes( 32 ).toString( 'base64' );
        const passwordSalt = await bCrypt.genSalt( 10 );
        const passwordHash = await bCrypt.hash( password, passwordSalt );

        await User.findOneAndUpdate(
            { username },
            {
                username,
                email: 'admin@discord-storage.local',
                password: passwordHash
            },
            options
        ).exec();

        defaultAdminSpinner.succeed( 'Updated default admin account.' );
        console.log( `Credentials for the admin account:` );
        console.log( `Username: ${ username }` );
        console.log( `Password: ${ password }` );
    } catch ( err ) {
        defaultAdminSpinner.fail( 'Can\'t update default admin account.' );
        console.error( err );
        process.exit( 1 );
    }
};

( async () => {
    await connectToDatabase();
    await updateDefaultAdmin();

    process.exit( 0 );
} )();
