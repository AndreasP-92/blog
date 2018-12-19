import React, {Component} from 'react'
import {withRouter} from "react-router-dom"

class Article extends Component {

    constructor(){
        super();
        this.state = {
            articles : []

        }
    }

    componentDidMount() {
        //console.log(this.props.match.url.split("/")[2])
        const id = this.props.match.url.split("/")[2]
        fetch('/JSON/articles/getOne/' + id )
          .then(res => res.json())
          .then(articles => this.setState({articles}, () => console.log('articles fetched...', articles)));
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
                <div className="oneArticle">
                    {this.state.articles.map(article => 
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
                    <div>
                        <div className="related">
                            ralated1
                        </div>
                        <div className="related">
                            related2
                        </div>
                        <div className="related">
                            related3
                        </div>
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
