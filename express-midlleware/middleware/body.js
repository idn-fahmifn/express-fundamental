//function cek object kosong
function isEmpty(obj) {
   return !obj || Object.keys(obj).length === 0;
} 

module.exports = (req, res, next) => {
    // Jika req.body kosong, maka akan menampilkan response kosong
    if (isEmpty(req.body)) {
        res.send("req body kosong");
    }
    // Jika req.body tidak kosong, maka akan menampilkan req.body
    res.send(req.body);
    next();
}

