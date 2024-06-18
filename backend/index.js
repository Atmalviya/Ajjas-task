const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');
const commentRoutes = require('./routes/comments')


const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://Atmalviya:ATV2malviya@cluster0.2dnnddb.mongodb.net/'

mongoose.connect(mongoURI)

app.use('/comments', commentRoutes);

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`server running on ${PORT}`)
});