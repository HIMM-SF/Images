const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const Listing = require('./listings');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/images/:id', (req, res) => {
  Listing
    .find({ _id: req.params.id })
    .then(([ data ]) => {
      res.json(data);
    })
    .catch(err => console.log(err));
});

app.get('/api/images', (req, res) => {
  Listing
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log(err));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});