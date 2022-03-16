module.exports = (req, res, next) => {

    //ini untuk menampilkan beberapa data yang disaring body-parser
    console.log("METHOD: ", req.method);
    console.log("PATH: ", req.path);
    console.log("Headers: ", req.headers);
    next();
    }