var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('Essa é a resposta da API');
});

module.exports = router;
