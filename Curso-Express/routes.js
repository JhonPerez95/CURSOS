const express = require('express');
const router = express.Router();
/*
router.get('/', function (req, res) {
    //res.send('Hello Word'); 
    res.render('index.ejs');
    //console.log("paso a la ruta Hello word");
});
*/
router.get('/login', function (req,res) {
    res.render('login.ejs');
    //res.send("Vista de login");
    //console.log("Paso a la ruta login");
});
module.exports = router;