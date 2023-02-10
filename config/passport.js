var passport = require("passport"); 
var LocalStrategy = require("password-local").Strategy; 

var db = require("../models");

passport.use(new LocalStrategy(

    {
        usernameField : "email"
    },

    function(email, password, done) {
        
        db.User.findOne({
            where: {
                email: email 
            }
        }).then(function(dbUser))
    }

))