import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register : create Account</h2>
                <form onSubmit="">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        id=""
                        name=""
                    />
                    <br /> <br />
                    <input type="password" placeholder="Enter Password" />
                    <br /> <br />
                    <input type="password" placeholder="ReEnter Password" />
                    <br /> <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>
                    Alrady have an Account/ <Link to="/login">LOgin</Link>
                </p>
            </div>
        </div>
    );
};
