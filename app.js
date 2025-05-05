const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db');
connectToDB();
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.routes');

app.set('view engine', 'ejs');
app.use(express.json());  // middleware used for taking password in terminal
app.use(express.urlencoded({extended:true})); //same
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});