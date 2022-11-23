const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose
  .connect( process.env.MONGO_URL )
  .then( () => console.log('DBconnection Successful') )
  .catch( (err) => console.log(err) );

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.listen(PORT, () => {
  console.log("Server Running");
})