require('dotenv').config();
const connect = require('./data/connect'); //connect include in very top, this registers the model


const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const apiBlogRouter = require('./routes/api/blogs')


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(),'views'))

app.use(express.static(path.join(process.cwd(),'public' )))

// express.json is the middle ware. it makes request body available
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use( indexRouter ); 
app.use( apiBlogRouter );

const PORT = process.env.PORT || 4202;

app.listen(PORT, () => {
    console.log(`Check http://localhost:${PORT}`);
    connect();
});

