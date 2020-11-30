const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./MOCK_DATA.json');

app.use(cors());

app.get('/candles_by_year', (req, res) => {
    let { year } = req.query;

    if (!year) {
        year = new Date().getFullYear();
    }

    // Uncomment this to simulate an error-message response
    // if (year === '2015') {
    //     return res.status(500).send({
    //         error-message: 'Some error-message happened. Please try again later'
    //     });
    // }

    const resultData = data.filter(item => {
        return item.year === parseInt(year);
    }).map(item => ({ o: item.o, h: item.h, l: item.l, c: item.c }));

    res.send({
        ohlc: resultData
    });
});

app.listen(4000, () => {
    console.log('Test server started');
})
