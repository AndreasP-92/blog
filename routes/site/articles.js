const db            = require('../../config/sql').connect();
const getAll        = require('../services/getAll');
const getAllWhere   = require('../services/getAllWhere');

module.exports = function(app){
    app.get('/articles/:1', function (req,res){
        var id = req.params.id

        res.send()
    })
    app.get('/JSON/articles/getAll', async function(req,res){
        const articles     = await getAll.articles();


       try {
           res.send(articles)
       } catch (error) {
           console.log(error)
       }
    }),
    app.get('/JSON/articles/getOne/:id', async function(req,res){
        articleId       = req.params.id;

        const article       = await getAllWhere.article(articleId);
        // console.log(article[0].articles_category)
        const related       = await getAllWhere.articleRelated(article[0].articles_category)
        console.log(related)

        try {
            res.send({article : article, related : related})
            // res.send(related)
        } catch (error) {
            console.log(error)
        }

    })
}