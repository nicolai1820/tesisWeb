import React from 'react'

export const RegistePage = () => {
    return (

        <div className="main">
            {/* Sign up form */}
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                </div>

                                <div className="form-group form-button">
                                    <button type="submit" name="signup" id="signup"  className="form-submit" defaultValue="Register" >
                                    Crear Cuenta
                                        </button>
                                    {/* <button className="buttonhref" className="signup-image-link">Inciar Sesión</button> */}

                                </div>
                            </form>

                        </div>
                        <div className="signup-image">
                            <figure><img src="https://specialcar.com.co/wp-content/uploads/2020/06/cropped-Artboard-1-1-2.png" alt="descripcion imagen" /></figure>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
