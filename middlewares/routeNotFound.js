module.exports = function (req, res, next) {
    res.format ({
        html: () => {
            res.status(404).send('<h1>Not found</h1>');
        },
        default: () => {
            res.status(404).send('<h1>Not found</h1>');
        }
    });
}