const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 8080; // Step 1

mongoose.Promise = global.Promise


// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://samo97:1997samo1997@cluster0-tdjrq.mongodb.net/tuam?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!');
});

//Step 3
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

var indexRouter = require('./routes/index');

app.use('/index', indexRouter);


// error handler middleware
app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  })
});


// if(process.env.NODE_ENV === 'production') {
// app.use(express.static('client/build'));
// app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })
// }
//


app.listen(PORT, console.log(`Server is starting at ${PORT}`));

