const db = require('../../config/sql').connect();

module.exports = function(app){
    app.get('/articles/:1', function (req,res){
        var id = req.params.id
        console.log('side læst')

        console.log(id)

        res.send()
    })
    app.get('/JSON/articles/getAll',function(req,res){
        sql=`
            SELECT
                *
            FROM
                tb_articles
        `
        db.query(sql,function(err,data){
            if(err){
                console.log(err)
            }else{
                res.json(data)
            }
        })
    }),
    app.get('/JSON/articles/getOne/:id',function(req,res){
        articleId       = req.params.id;
        sql=`
            SELECT
                *
            FROM
                tb_articles
            WHERE
                articles_id = ?
        `
        db.query(sql, articleId, function(err,data){
            if(err){
                console.log(err)
            }else{
                res.json(data)
            }
        })
    })
}