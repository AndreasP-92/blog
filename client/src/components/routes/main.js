import React                from 'react';
import { Switch, Route }    from 'react-router-dom'

import Index    from '../pages/index'
import ArticlePage  from '../pages/articles/article'


const Main = () =>(
  <Switch>
    <Route exact path="/" component         ={Index} />
    <Route path="/articles/:id" component   ={ArticlePage} />
  </Switch>
)

export default Main;