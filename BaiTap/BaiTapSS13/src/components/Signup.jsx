import React, { useState } from 'react';
import "./Signup.css";

export default function Signup() {
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // check email đã tồn tại hay chưa, nếu tồn tại rồi thì báo, còn chưa thì đk bth
        fetch(`http://localhost:8000/users?email=${newUser.email}`)
        .then(response=>response.json())
        .then(data=>{
            if(data.length >0){
                console.log("trùng");
                return 
            }
            else{
                const response =  fetch("http://localhost:8000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser)
                });
            }
        })
       
    };

    return (
        <div>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center">Sign up</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <span className="fa fa-user"></span>
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={newUser.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={newUser.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm password"
                                name="confirmPassword"
                                value={newUser.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary login-btn btn-block">
                            Sign up
                        </button>
                    </div>
                    {message && <div className="text-center">{message}</div>}
                </form>
            </div>
        </div>
    );
}
