const db = require('../../config/sql').connect()
const Hash 	= require('./hash');

module.exports = {


    user:function(username, passphrase, mail, name, lastname){
        return new Promise (async (resolve,reject)=>{
            var hash = await Hash(passphrase)
            sql=`
            INSERT INTO 
                tb_users 
            SET 
                user_username 			= ?, 
                user_passphrase 		= ?, 
                user_firstname			= ?,
                user_lastname           = ?, 
                user_mail 				= ?, 
                user_resetpass  		= 0,
                user_resetpassexpire	= 0
            `
            db.execute(sql,[username,hash, name, lastname, mail,], function(err,result){
                if(err)reject(err)
                resolve(true)
            });
        });
    },
}