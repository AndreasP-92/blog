import React    from 'react';
import Main     from './components/routes/main'
import { Link } from 'react-router-dom'


class App extends React.Component{

    render(){
        return(
            <div>

{/* NAVIGATION ========== */}
                    <div className="menu">
                        <button className="menuButton">Menu</button>
                        <nav className="navigation">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/authentication/admin'>admin</Link></li>
                            </ul>
                        </nav>

                    </div>

                <div className="wrapper">
                {/* <a href=""></a> */}
                    {/* <Link to="/articles">Articles</Link> */}
                    <Main/>
                <div></div>
                </div>
                <div className="footer"></div>
            </div>
    
            )
    }
}
export default App;