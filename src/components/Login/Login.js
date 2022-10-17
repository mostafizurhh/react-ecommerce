import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import logo from './google.png'

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate(); /* to navigate from login page*/
    const location = useLocation(); /* get current url location */
    const from = location.state?.from?.pathname || '/'; /* get current url location */

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)


        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true }); /* reroute users to previous location */
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label mt-2">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-2">
                            {/* toggle button */}
                            <label className="label">
                                <small>New to our website?</small>
                                <Link to="/register" className="label-text-alt link link-hover ml-2">Register here!</Link>
                            </label>
                            <small>
                                ------------------OR----------------
                            </small>
                            <button className="btn bg-white capitalize text-indigo-500">
                                <img src={logo} style={{ width: 25, height: 25, marginRight: 10 }} />
                                Continue with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;