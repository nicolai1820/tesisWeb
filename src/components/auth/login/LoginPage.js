import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../../services/login';
import './LoginPage.css'
import logo from "../../../assets/logo_politecnico.png";

export const LoginPage = () => {

    const dispatch = useDispatch();
    const [loginFormValue, setloginFormValue] = useState({
        email:"nicolasmaldonado359@gmail.com",
        password:"123456"
    })
    const {email, password} = loginFormValue;

    const onLogin = (e)=>{
        e.preventDefault();
        console.log(email);
        console.log(password);
         dispatch(login(email, password));
    }
    

    return (
        <div className="main">
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img className="imglogin" src={logo} alt="descripcion imagen" /></figure>
                            {/* <a href="#" className="signup-image-link">Create an account</a> */}
                        </div>
                        <div className="signin-form">
                            <h2 className="form-title">Iniciar Sesión</h2>
                            <form method="POST" className="register-form" id="login-form" onSubmit={onLogin}>
                                <div className="form-group">
                                    <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                                    <input 
                                    type="text" 
                                    name="email"
                                    placeholder="Ingresa tu usuario" 
                                    value={email}
                                    onChange={(e) => setloginFormValue({ ...loginFormValue, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                                    <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setloginFormValue({ ...loginFormValue, password: e.target.value })}
                                    />
                                </div>
                                {/* <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                    <label htmlFor="remember-me" className="label-agree-term"><span><span /></span>Remember me</label>
                                </div> */}
                                <div className="form-group form-button">
                                    <button  name="signin" id="signin" className="form-submit" defaultValue="Log in" >
                                    Iniciar
                                        </button>
                                </div>
                            </form>
                            <div className="social-login">
                                {/* <span className="social-label">Or login with</span> */}
                                <ul className="socials">
                                    <li><button className="buttonhref"><i className="display-flex-center zmdi zmdi-facebook" /></button></li>
                                    <li><button className="buttonhref"><i className="display-flex-center zmdi zmdi-twitter" /></button></li>
                                    <li><button className="buttonhref" ><i className="display-flex-center zmdi zmdi-google" /></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>







    )
}
