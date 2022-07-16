

const router = require('express').Router();

router.route('/')
.get(async(req, res) => {
    console.log("get");
    res.render('index')
});

module.exports = router;