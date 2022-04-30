const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv')
const routerUrls = require('./Routes/routes')
const mongoose = require('mongoose')
const path = require('path')
const publicPath = path.join(__dirname, 'frontend', 'public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

dotenv.config()

mongoose.connect(
    process.env.DATABASE_ACCESS,
    () => console.log('Database Connected')
)



app.use(express.json())
app.use(cors())
app.use('/app', routerUrls)
app.listen(port, () => console.log(`Server Connected`))

