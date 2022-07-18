const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.session.loggedin) {
        res.send(`Welcome back, ${req.session.username}!`);
    } else {
        res.send('Please login to view this page!');
    }

    res.end();
})

module.exports = router;