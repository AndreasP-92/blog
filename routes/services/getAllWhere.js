const db = require('../../config/sql').connect()

module.exports = {


    article:function(id){
        return new Promise((resolve,reject)=>{
            sql=`
            SELECT
                *
            FROM
                tb_articles
            WHERE
                articles_id = ?
        `
            db.query(sql,id,function(err,data){
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    },
    articleRelated:function(category){
        return new Promise((resolve,reject)=>{
            sql=`
                SELECT
                    *
                FROM
                    tb_articles
                WHERE
                    articles_category = ?
                LIMIT 3
            `
            db.query(sql,category,function(err,data){
                if(err)reject(err)
                else{
                    resolve(data)
                }
            })
        })
    }
}