const router = require('express').Router();

router.get('/:x/:y', (req, res) => {
    const { x, y } = req.params;

    const resultado = x * y;
    res.send({ resultado });
})

module.exports = router;