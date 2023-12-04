const express = require('express')
const bodyParser = require('body-parser')
const v1CategoryRouter = require('./v1/routes/categoryRoutes')
const v1AccountRouter = require('./v1/routes/accountRoutes')

// DATABASE

const app = express()
// const PORT = process.env.PORT || 3000
const PORT = 3000

app.use(bodyParser.json())
app.use('/api/v1/category', v1CategoryRouter)
app.use('/api/v1/account', v1AccountRouter)

app.listen(PORT, () => {
    console.log('API Listening to PORT ' + PORT)
})