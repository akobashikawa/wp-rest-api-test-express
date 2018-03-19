var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/wprestapi-get", function(req, res, next) {
  console.log(req.query);
  const url = req.query.url;
  if (!url) return res.json({message: 'url not specified'});
  axios(url)
    .then(response => {
      const json = response.data;
      res.render("json", { json });
    })
    .catch(err => {
      console.log(err)
      return err;
    });
});

module.exports = router;
