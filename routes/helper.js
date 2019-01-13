module.exports = function(app) {



    require('./site/articles')(app);
    
    // LOGIN ========================
    
    require('./login/register.js')(app)
    require('./login/login')(app)
}