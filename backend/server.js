const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv')
const routerUrls = require('./Routes/routes')
const mongoose = require('mongoose')
const path = require('path')

const PORT = process.env.PORT || 5000
__dirname = path.resolve()

dotenv.config()

mongoose.connect(
    process.env.DATABASE_ACCESS,
    () => console.log('Database Connected')
)

app.use(express.json())
app.use(cors())
app.use("/app", routerUrls);

//---------deployment--------//
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('API is running')
    })
}

//----------deployment----------//



app.listen(PORT, () => console.log(`Server Connected On Port ${PORT}`))

