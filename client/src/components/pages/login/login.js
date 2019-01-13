import React, {Component}   from 'react';
import {Link}               from 'react-router-dom';
// import 'modules/bootsrap/css/bootsrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/authentication.css';



class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoginOpen = true, isRegisterOpen: false
        };  
    }

    submitLogin(e){
        
    }

    render (){
        return(
            <div className="loginWrapper">
                <div class="container">
                    <div class="card card-container">
                        <a href="/" class="forgot-password"><i class="fa fa-caret-left"></i> Back to Webside </a>
                        <h2 class="login-register-title" >Login</h2>
                        <p id="profile-name" class="profile-name-card"></p>
                        <form class="form-signin" method="post" action="/JSON/login"  id="registerForm">
                            <span id="reauth-email" class="reauth-email"></span>
                    {/* USERNAME */}
                            <input type="text" name="username" id="login__username" class="form-control input__field" placeholder="Username" required></input>
                            <div id="userValid"></div>		
                    {/* PASSWORD */}
                            <input type="password"  class="form-control input__field" id="password01" name="passphrase" placeholder="Password" required></input>
                            <div id="passwordValid"></div>							
                            <div id="remember" class="checkbox">
                            </div>
                            <button class="btn btn-lg btn-primary btn-block btn-signin" id="submitButton" onClick={this.submitLogin.bind(this)} type="submit">Login</button>
                            <a href="/google/login">Sign in with Google+</a>
                            <a href="/register">Sign Up</a> 
                            <a href="/forgot">Forgot Password?</a>
                            <Link to="/register">Register</Link>
                        </form>
                    </div>
                </div>
            
                <div class="rigistrationSuccess">
                    <h2>Validating</h2>
                </div>
            </div>
        )
    };
};
export default Login;