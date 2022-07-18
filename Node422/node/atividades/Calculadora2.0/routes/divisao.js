const router = require('express').Router();

router.get('/:x/:y', (req, res) => {
    const { x, y } = req.params;

    if (y === '0') {
        res.status(400).send('Divisao por zero')
    } else {
        const resultado = x / y;
        res.send({ resultado });
    }
})

module.exports = router;