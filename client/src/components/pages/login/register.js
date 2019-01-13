import React, {Component}   from 'react';
import {Link}               from 'react-router-dom';
// import 'modules/bootsrap/css/bootsrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/authentication.css';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    submitRegister(e){
        
    }

    render () {
        return(
            <div className="loginWrapper">
                 <div class="container">
                    <div class="card card-container">
                        <h2 class="login-register-title">Registration</h2>            
                        <p id="profile-name" class="profile-name-card"></p>
                        <form class="form-signin" method="post" action="/JSON/userinsert" id="registerForm">
            {/* USERNAME ============ */}
                            <span id="reauth-email" class="reauth-email"></span>
                            <input type="text" name="username" id="login__username" class="form-control input__field" placeholder="Username" ></input>
                            <div id="userValid" class="valid"></div>			
            {/* PASSWORD ============= */}
                            <input type="password"  class="form-control input__field" id="password01" name="passphrase" placeholder="Password" ></input>
                            <div id="passwordValid" class="valid"></div>							
                            <input type="password"  class="form-control input__field" id="password02" placeholder="Repeat Password" ></input>
            {/* NAME ================= */}
                            <div id="name_valid" class="valid"></div>							
                            <span id="reauth-email" class="reauth-email"></span>
                            <input type="text" name="name" id="name" class="form-control input__field" placeholder="Name" ></input>
            {/* LASTNAME ============= */}
                            <div id="lastname_valid" class="valid"></div>							
                            <span id="reauth-email" class="reauth-email"></span>
                            <input type="text" name="lastname" id="lastname" class="form-control input__field" placeholder="Last Name" ></input>
            {/* EMAIL ================= */}
                            <div id="email_valid" class="valid"></div>							
                            <input type="email"  name="email" class="form-control input__field" id="email" placeholder="E-mail" ></input>			
                            {/* <div id="remember" class="checkbox">

                            </div> */}
                            <button class="btn btn-lg btn-primary btn-block btn-signin" id="submitButton" onClick={this.submitRegister.bind(this)} type="submit">Register</button>
                        </form>
                        <Link to="/"><i class="fa fa-close"></i> Cancel Registration</Link>                        
                    </div>
                </div>
            {/* SUCCESS ============== */}
                <div class="rigistrationSuccess">
                    <h2>Registration has been success</h2>
                </div>
                
                
            </div>
        )
    };
};

export default Register;