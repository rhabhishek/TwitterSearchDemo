const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const dbCredentials = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'twitter'
};

// Get all posts
router.get('/posts', (req, res) => {

  const connection = mysql.createConnection(dbCredentials);
  connection.connect((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
  })
  connection.query('SELECT * FROM `tweets` ORDER BY `tweets`.`timestamp` DESC ', function (err, rows, fields) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }

    res.status(200).json(rows);
  });
  connection.end();

})

router.get('/search/:key', (req, res) => {
  const key = req.params.key;
  const connection = mysql.createConnection(dbCredentials);
  connection.connect((err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
  connection.query('SELECT * FROM `tweets` where user_id = ? OR ' +
    'text like ? ORDER BY `tweets`.`timestamp` DESC ', [key, '%' + key + '%'], function (err, rows) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }

    res.status(200).json(rows);
  });
  connection.end();

});

module.exports = router;
