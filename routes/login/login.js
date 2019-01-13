// const User 						= require('../services/users');
const passport 					= require('../../middleware/passport');
const getOne					= require('../services/getOne');

module.exports = function (app) {
	// app.get('/login', (req, res) => {
	// 	let username	= 	req.session.username;

	// 	res.render('pages/login/login',{
	// 		'username'	:	username
	// 	});
	// });

	// app.get('/login/find/:user',async function(req,res){
	// 	let User = req.params.user
	// 	try{
	// 		const user = await getOne.user(User);
	// 		res.send(user)
	// 	}catch(e){
	// 		console.log(e)
	// 	}

    // })
    
    app.get('/test', (req,res)=>{
        // console.log(req.body)
        console.log('test')
        res.send('test')
    })

	app.post('/JSON/login', passport.authenticate('local', {
		'successRedirect': '/',
		'failureRedirect': '/login',
		'failureFlash': true
	}));

	app.get('/logout', (req, res) => {
		req.session.destroy((err) => {
			res.redirect('/');
		});
	});
};
