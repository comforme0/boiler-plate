const express = require('express')
const app = express()
const port = 3000


const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://comforme:abcd1234@boilerplate.6foma.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongodb+srv://comforme:<password>@boilerplate.6foma.mongodb.net/<dbname>?retryWrites=true&w=majority

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})