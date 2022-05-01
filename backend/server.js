const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv')
const routerUrls = require('./Routes/routes')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

dotenv.config()

mongoose.connect(
    process.env.DATABASE_ACCESS,
    () => console.log('Database Connected')
)

app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
}

app.use('/app', routerUrls)
app.listen(PORT, () => console.log(`Server Connected`))

