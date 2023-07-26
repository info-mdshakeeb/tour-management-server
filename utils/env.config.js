const path = require('http')
const dotenv = require('dotenv')


dotenv.config({ path: path.join(process.cwd(), "env") })

module.exports = {
    port: process.env.PORT,
    MongooseUrl: process.env.MongooseUrl
}