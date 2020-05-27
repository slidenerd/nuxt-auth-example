import mongoose, { Schema } from 'mongoose';

if ( process.env.NODE_ENV === 'development' ) delete mongoose.connection.models[ 'User' ];

export default mongoose.model( 'User', new Schema( {
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 16
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxLength: 255
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
} ) );
