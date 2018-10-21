const express = require('express');

var app = express();

app.get('/',(req,res) => {
  res.status(404).send({
    error: 'Page not found.'
  });
});


app.get('/users',(req,res) => {
    res.send([
      {name: 'muslim omar', age: 20},
      {name: 'Rolyan ali', age: 19},
      {name: 'Chavin Qawas', age: 20},
      {name: 'Eminem', age: 45}
    ]);
});

app.listen(3000);
module.exports.app = app;
