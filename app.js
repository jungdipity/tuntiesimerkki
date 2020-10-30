'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const app = express();
const port = 3000;

//pitää olla ennen app.use('/cat'..), etc, muuten ei toimi
app.use(cors());
app.use(express.static('uploads'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: 'application/*+json'}));

app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));