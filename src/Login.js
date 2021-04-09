import React, { useState } from 'react';
import "./Login.css"
import { Link,useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); //stop the refresh 11
        //do the login logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //loged in and redirect to home
            history.push("./");

        })
        .catch(e => alert(e.message));
    }
    const register = event => {
        event.preventDefault(); //stop the refresh 11
        //do the register logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // create a user and logged in...
            history.push("./");
        })
        .catch(e => alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} className="login__singInButton">Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
