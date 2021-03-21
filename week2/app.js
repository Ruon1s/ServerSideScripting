'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const passport = require('./utils/pass');
const authRoute = require('./routes/authRoute');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user',passport.authenticate('jwt', {session: false}), userRoute);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
