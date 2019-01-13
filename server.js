const express   = require('express');
const app       = express();
const path        = require('path');
const bodyParser  = require('body-parser');
const session     = require('express-session');
const fileUpload  = require('express-fileupload');
const passport    = require('passport');


// GETTING FORM DATA VIA BODY PARSER 
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

// SESSION ===============================

    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 20 * 60 * 1000 } // 30 minutter
    }));

// PASSPORT ============================

    app.use(passport.initialize());
    app.use(passport.session());

// File upload ============================

    app.use(fileUpload());

// app LISTEN =========================

const port = 5000;

require('./routes/helper')(app);
app.listen(port, () => `app running on port ${port}`);