const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


// basic text :
app.get('/', (req, res) => {
    res.status(200).json("server is working")
})


module.exports = app;