module.exports = (x, y) => {
    if (y !== 0) {
        return x / y
    }

    throw new Error('Divisao por zero')
};