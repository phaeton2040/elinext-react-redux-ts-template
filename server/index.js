const express = require('express');
const app = express();
const data = require('./MOCK_DATA.json');

app.get('/candles_by_year', (req, res) => {
    let { year } = req.query;

    if (!year) {
        year = new Date().getFullYear();
    }

    const resultData = data.filter(item => {
        return item.year === year;
    }).map(item => ({ o: item.o, h: item.h, l: item.l, c: item.c }));

    res.send({
        ohlc: resultData
    });
});

app.listen(4000, () => {
    console.log('Test server started');
})
