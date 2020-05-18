var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/:vk_user_id', function(req, res, next) {
    console.log('req: ', req.params.vk_user_id);
    res.render('index', { title: id });
});

module.exports = router;