const express = require('express');
const app = express();
const itemRoutes = express.Router();

const Item = require('../models/Item');

itemRoutes.route('/add').post(function(req, res) {
  var item = new Item(req.body);
  item.save().then(item => {
    res.status(200).json({ 'item': 'Item added successfully' });
  })
  .catch(err => {
    res.status(400).send("unable to save to DB");
  });
})

itemRoutes.route('/').get(function(req, res) {
  Item.find(function(err, items) {
    if(err){
      console.log(err);
    } else {
      res.json(items);
    }
  });
});

itemRoutes.route('/edit/:id').get(function(req, res) {
  const id = req.params.id;
  Item.findById(id, function (err, item){
    res.json(item);
  });
});

itemRoutes.route('/update/:id').post(function(req,res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item) {
      return next(new Error('Could not load Document'));
    } else {
      item.name = req.body.name;
      item.price = req.body.price;
      item.save().then(item => {
        res.json('Update Complete');
      })
      .catch(err => {
        res.status(400).send('unable to update DB');
      });
    }
  });
});

itemRoutes.route('/delete/:id').get(function(req, res) {
  Item.findByIdAndRemove({ _id: req.params.id }, function(err, item) {
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = itemRoutes;