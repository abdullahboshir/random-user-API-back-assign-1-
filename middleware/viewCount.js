let count = 0;
const veiwCount = (req, res, next) => {
    count++;
    console.log(count);

    res.send('tools found')
    next()
};

module.exports = veiwCount;