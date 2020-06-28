const mongoose = require('mongoose');
const databaseUrl = 'mongodb+srv://root:root@test-database-s0ai1.mongodb.net/test?retryWrites=true&w=majority';


const initDb = async () => {
    try {
        await mongoose.connect(databaseUrl, {
            useNewUrlParser: true
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = initDb