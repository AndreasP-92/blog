import React, {Component}   from 'react'
import { Link }             from 'react-router-dom'

class Index extends Component {
    constructor(){
        super();
        this.state = {
            articles : []

        }
    }

    componentDidMount() {
        fetch('/JSON/articles/getAll')
          .then(res => res.json())
          .then(articles => this.setState({articles}, () => console.log('articles fetched...', articles)));
      }

      render(){
          console.log(process)
          return(
//   ARTICLES FOR EACH
                <div className="index_board">
                    <div className="index_articles_board">
                    
                     {this.state.articles.map(article => 
                        <div className="article_div_id">
                        <Link to={"/articles/" + article.articles_id}>
                            <article className="article"> 
                            <h1>{this.props.articles_image}</h1>
                                <img src={"/media/index/articles/" + article.articles_image} alt=""></img>
                            </article>
                            <article className="article_text">
                                <h2>{article.articles_header}</h2>
                                <p className="article_date bold">
                                    {/* Examples in article, Node, Databases, etc | Date : 26-05-2018 */}
                                    {article.articles_keywords} | {article.articles_date}
                                </p>
                                <p className="article_description">
                                    {article.articles_text}
                                </p>
                            </article>
                            </Link>
                        </div>
                    )}
                    
                       

                        <div className="article_div_id">
{/* ARTICLES STATIC ================= */}
                            <article className="article">
                                <img src="./media/index/articles/missing_picture.png" alt=""></img>
                            </article>
                            <article className="article_text">
                                <h2>How to build a NodeJS server on Linux CentOS </h2>
                                <p className="article_date bold">
                                    {/* Examples in article, Node, Databases, etc | Date : 26-05-2018 */}
                                    EXAMPLES IN ARTICLE, NODE, DATABASES | 26-05-2018
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum facilisis ligula, eget accumsan nisl aliquet eu.
                                    Aenean vehicula, ex a molestie venenatis, ligula nibh suscipit libero, porttitor rhoncus tellus velit at lacus. Morbi tincidunt
                                    posuere nunc ac mattis. Cras convallis lobortis dictum. Etiam facilisis viverra lectus, vitae lobortis nunc blandit id. Mauris
                                    fringilla malesuada lacus a finibus. Cras placerat tincidunt rutrum. Duis velit quam.
                                </p>
                            </article>
                        </div>
                        <div className="article_div_id">
                            <article className="article">
                                
                                <img src="./media/index/articles/missing_picture.png" alt=""></img>
                            </article>
                            <article className="article_text">
                                <h2>How to build a NodeJS server on Linux CentOS </h2>
                                <p className="article_date bold">
                                    {/* Examples in article, Node, Databases, etc | Date : 26-05-2018 */}
                                    EXAMPLES IN ARTICLE, NODE, DATABASES | 26-05-2018
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum facilisis ligula, eget accumsan nisl aliquet eu.
                                    Aenean vehicula, ex a molestie venenatis, ligula nibh suscipit libero, porttitor rhoncus tellus velit at lacus. Morbi tincidunt
                                    posuere nunc ac mattis. Cras convallis lobortis dictum. Etiam facilisis viverra lectus, vitae lobortis nunc blandit id. Mauris
                                    fringilla malesuada lacus a finibus. Cras placerat tincidunt rutrum. Duis velit quam.
                                </p>
                            </article>
                        </div>
                    </div>
        </div>
        )
    }
}
export default Index;
