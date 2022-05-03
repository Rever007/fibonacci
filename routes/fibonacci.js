const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    let num_index = null;
    if (req.query.index) {
        num_index = req.query.index
    } else {
        num_index = req.body.index
    }

    if (1 <= num_index && num_index <= 100) {
        const fibonacci = getListFibonacci(num_index - 1);

        const result = {
            "result_fibonacci": fibonacci.slice(-1)[0],
        }
        res.send(result);
    } else {
        res.status("400").send("Rango invalido")
    }
});

const getListFibonacci = function (n) {
    if (n === 0) {
        return [0]
    }

    let arr = [0, 1];
    for (let i = 2; i < n + 2; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }

    return arr
};

module.exports = router;