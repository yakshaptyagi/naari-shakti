const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./Routes/RegisterRoute');
const logger = require('morgan');

const port = process.env.PORT || 5001;

mongoose.connect('mongodb+srv://mongoadmin:kjG9RtvrrgNWx49E@contact-cluster.ntxhw.mongodb.net/NaariShaktiDB');
// mongoose.set('strictQuery', true);
mongoose.connection.once('open', (err)=>{
    if(!err){
        console.log('connected to mongoDB');
    }
    else{
        console.log(err);
    }
})

app.use(cors({origin: true, credentials: true, }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api/v1', routes);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})