const db = require('../../config/sql').connect()

module.exports = {


    articles:function(){
        return new Promise((resolve,reject)=>{
            sql=`
            SELECT
                *
            FROM
                tb_articles
        `
        db.query(sql,function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
        })
    }
}