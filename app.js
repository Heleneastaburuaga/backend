let express = require('express');
let app = express();

app.use(express.static('public')); //middleware 
app.use(express.urlencoded({ extended: false })); //Post parametroak jasotzeko gaitasuna.

app.listen( 3002, function() {
    console.log("Zerbitzaria 3002 portuan entzuten");
})

app.get("/", function(req, res) {
    res.send("Hello world!");
});

app.post("/bezeroa", function(req,res) {
   let emaitza=[
    {
        "name":req.body.izena,
        "email":req.body.email,
        "password":req.body.password,
        "confirm-password":req.body.ConfirmPassword,
        "gender":req.body.gender,
        "data":req.body.birth,
        "address":req.body.address,
        "city":req.body.city,
        "zip":req.body.ZipCode,
        "agree":req.body.conditions,
        "newsletter":req.body.newsletter
    }
   ] 
    res.send(emaitza);
});

app.get('/bezeroa/', function(req,res) {
    res.send(`Bezeroaren izena: ${req.query.izena} ${req.query.abizena}`);
});