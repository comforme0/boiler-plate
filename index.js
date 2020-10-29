const express = require('express')
const app = express()
const port = 5000

const bodyParser = require("body-parser");
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://comforme:abcd1234@boilerplate.6foma.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! good morning !!!')
})

app.post("/register", (req, res) => {

  console.log(req.body)
  const user = new User;

  user.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
          success: true
      });
  });
});

// mongodb+srv://comforme:<password>@boilerplate.6foma.mongodb.net/<dbname>?retryWrites=true&w=majority

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})