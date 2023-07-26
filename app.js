const express = require('express')
const cors = require('cors')
const globalErrorHandler = require('./middleware/globalErrorHandler')
const noRouteFound = require('./middleware/noRoute')
const servicesRoute = require('./routes/Services.route')

const app = express()

app.use(cors())
app.use(express.json())


// basic text :
app.get('/', (req, res) => {
    // throw new ApiError(404, "test error")
    res.status(200).json("server is working")
})
//all routes :
app.use('/api/v1/services/', servicesRoute)

app.use(globalErrorHandler)
app.use(noRouteFound)

module.exports = app;