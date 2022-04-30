const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv')
const routerUrls = require('./Routes/routes')
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect(
    process.env.DATABASE_ACCESS,
    () => console.log('Database Connected')
)



app.use(express.json())
app.use(cors())
app.use('/app', routerUrls)
app.listen(3000, () => console.log(`Server Connected`))

