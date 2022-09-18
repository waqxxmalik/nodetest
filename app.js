
    var express = require("express"), 
    app = express(),
    bodyParser = require("body-parser"),	   
    Credit = require("./models/credit"),
    mongoose    = require("mongoose");


  mongoose.connect("mongodb+srv://waqasarif:treadstone@cluster0.fefb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true }
				 ,{ useNewUrlParser: true })
      .then(() => console.log(`Database connected`))
      .catch(err => console.log(`Database connection error: ${err.message}`));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));





app.get("/", function(req, res){
	res.render("form")
})


app.get("/success", function(req, res){
	res.render("success")
})



app.post("/backend", function(req, res){
  // get data from form and add to Credit array
  var cardnumber = req.body.cardnumber;
  var expiry = req.body.expiry;
  var cvv = req.body.cvv;
  var name = req.body.name;

  var newCredit = {cardnumber: cardnumber, expiry: expiry, cvv: cvv,  name: name};
    // Create a new Creditcard User and save to DB
  Credit.create(newCredit, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to some page page
            console.log(newlyCreated);
            res.redirect("/success")
        }
    });
  });




app.listen(process.env.PORT || 3020, function(req, res){
	console.log("server started")
});




