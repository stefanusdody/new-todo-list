const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path =require('path');


//import routes
const items = require('./routes/item');
const userRoutes = require("./routes/user");

const app = express();

//middleware
app.use(bodyParser.json());


//db config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose
  .connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))

//use routes
app.use('/api/items', items);
app.use("/api", userRoutes);

// serve static assets if in productions
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`));
