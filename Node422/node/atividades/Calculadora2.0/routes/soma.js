const router = require('express').Router();

router.get('/:x/:y', (req, res) => {
    const { x, y } = req.params;

    const resultado = Number(x) + Number(y);
    res.send({ resultado });
})

module.exports = router;