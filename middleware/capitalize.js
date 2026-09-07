module.exports = capitalize = (req,res,next) => {
    req.originName = req.params.name;
    req.params.name = req.params.name.toUpperCase();
    next();
};