import React                from 'react';
import { Switch, Route }    from 'react-router-dom'

import Index        from '../pages/indexFiles/index'
import ArticlePage  from '../pages/articles/article'
import Login        from '../pages/login/login'
import Register     from '../pages/login/register'
import AdminMain    from '../pages/admin/adminMain'
import About        from '../pages/indexFiles/about'


const Main = () =>(
  <Switch>
    <Route exact path="/"                   component   ={Index} />
    <Route path="/articles/:id"             component   ={ArticlePage} />
    <Route path="/login"                    component   ={Login} />
    <Route path="/register"                 component   ={Register} />
    <Route path="/authentication/admin"     component   ={AdminMain} />
    <Route path="/about"                    component   ={About} />
  </Switch>
)

export default Main;