const db            = require('../../config/sql').connect();
const getAll        = require('../services/getAll');
const getAllWhere   = require('../services/getAllWhere');
const insert        = require('../services/insert');

module.exports = function(app){
    app.post('/JSON/userinsert', async function(req,res){

        let name		= req.body.name;
		let lastname	= req.body.lastname;
		let mail 		= req.body.email;
		let username	= req.body.username;
        let passphrase	= req.body.passphrase;
        
        console.log(req.body)

        try {
            result 			= await insert.user(username, passphrase, mail, name, lastname);
            // inserProfile	= await insert.profile(mail, name, lastname, filePlaceholder, username)
            // inserProfile	= await insert.shippingInfo(username)
            if (result === true) {
            res.redirect('/login')
            } else {
                res.send('poop');
            }
            
        } catch (err) {
            console.log(err)
        }

        // res.redirect('/')

    })
}