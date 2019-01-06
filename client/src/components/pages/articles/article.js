import React, {Component} from 'react'
import {withRouter} from "react-router-dom"

class Article extends Component {

    constructor(){
        super();
        this.state = {
            article    : [],
            related     : []

        }
    }

    componentDidMount() {
        //console.log(this.props.match.url.split("/")[2])
        const id = this.props.match.url.split("/")[2]
        console.log('this state',this.state)
        fetch('/JSON/articles/getOne/' + id )
            // console.log(fetch('/JSON/articles/getOne/' + id ))
          .then(res => res.json())
          .then(data => this.setState({article : data.article, related : data.related}, () => console.log('articles fetched...', data)));


      }

    render(){
        console.log(this.props.match)
        return(
            <div className="articleWrapper">
{/* ADD 1 ============ */}
                <div className="add1">
                    <h2>add1</h2>
                </div>
{/* ARTICLE ========== */}
            <div className="articleBoard">

                <div className="oneArticle">
                    {this.state.article.map(article => 
                        <article>
                            <h2>{article.articles_header}</h2>
                            <div className="oneArticleImg">
                            <img src={"/media/index/articles/" + article.articles_image} alt=""></img>
                            </div>
                            <article className="">
                            <div className="oneArticleDate">
                                <p>
                                    {/* Examples in article, Node, Databases, etc | Date : 26-05-2018 */}
                                    {article.articles_keywords} | {article.articles_date}
                                </p>
                            </div>
                            <div className="oneArticleText" dangerouslySetInnerHTML={{__html: article.articles_text}}>
                                
                            </div>
                            </article>
                        </article>
                    )}

                </div>
{/* RELATED ARTICLES ========== */}

                <div className="relatedArticles">
                    {this.state.related.map(data =>
                        <div className="related">
                            <img src={"/media/index/articles/"+data.articles_image} alt="Related"></img>
                            <h2>{data.articles_header}</h2>
                        </div>
                    )}
                </div>
            </div>

{/* ADD 2 =========== */}
                <div className="add2">
                    <h2>add2</h2>
                </div>
            </div>
        )
    }
}
export default withRouter(Article);

