import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css"
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} className="login_signInButton" >Sign In</button>
                </form>
                <p>
                    By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.
                </p>
                <button onClick={register} className="login_registerButton" >Create Your Amazon Acount</button>
            </div>
        </div>
    );
}

export default Login;
