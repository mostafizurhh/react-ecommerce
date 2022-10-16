import React from 'react';
import { Link } from 'react-router-dom';
import logo from './google.png'

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
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