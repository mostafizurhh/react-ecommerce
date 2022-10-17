import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './google.png'

const Register = () => {
    const [error, setError] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(name, email, password, confirmPassword)
        if (password.length < 8) {
            setError('Password must be at least 8 charecter');
            return;
        }
        if (password !== confirmPassword) {
            setError('password did not match');
            return;
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <p className="text-2xl text-center font-bold">Register with your email</p>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">UserName</span>
                            </label>
                            <input type="text" name='userName' placeholder="choose an userName" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="confirm your password" className="input input-bordered" required />
                        </div>
                        <p className='text-red-700'><small>{error}</small></p>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control mt-2">
                            {/* button toggle */}
                            <label className="label mt-1">
                                <small>Already have an account?</small>
                                <Link to="/login" className="label-text-alt link link-hover ml-2">Login here!</Link>
                            </label>
                            <small>
                                ------------------OR----------------
                            </small>
                            <button className="btn bg-white capitalize text-indigo-500">
                                <img src={logo} style={{ width: 25, height: 25, marginRight: 10 }} />
                                Register with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;