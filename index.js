const express = require('express');

const usersRouter = require('./route/users');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/v1/users', usersRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('App is listening on port: '+ port));