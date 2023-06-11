const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/inotebook?directConnection=true';

function connectToMongo() {
    mongoose.connect(mongoURI).then(
        (data) => {
            console.log(`connected to Mongo successfully `)
        }
    ).catch(
        (err) => {
            console.log(err)
        }
    )
}
module.exports = connectToMongo