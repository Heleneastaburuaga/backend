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
    res.send(`Kaixo ${req.body.izena}, eskaera jaso dut`);
});

app.get('/bezeroa/', function(req,res) {
    res.send(`Bezeroaren izena: ${req.query.izena} ${req.query.abizena}`);
});