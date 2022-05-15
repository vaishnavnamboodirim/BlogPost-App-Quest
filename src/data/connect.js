const mongoose = require('mongoose' );
require('../models/Blog')

mongoose.set('returnOriginal',false);
mongoose.set('runValidators',true);

const connect = () => {
    const {DB_HOST, DB_PORT, DB_NAME} = process.env;

    mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`).then(() => {
        console.log('connected to mongoDB')
    })
        .catch(error => {
            console.error(error.message);
        });

};

module.exports = connect;

