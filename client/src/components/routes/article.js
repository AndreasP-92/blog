import React                from 'react';
import { Switch, Route }    from 'react-router-dom'

import ArticlePage from '../pages/index'


const Article = () =>(
  <Switch>
    <Route exact path="/" component={ArticlePage} />
  </Switch>
)

export default Article;