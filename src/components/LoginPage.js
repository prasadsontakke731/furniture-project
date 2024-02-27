import React from 'react'
import "./LoginPage.css"
const LoginPage = () => {
    return (
        <div className="form-container">
            <h2 className="form-title">Login</h2>
            <form>
                <div className="mb-3">
                    <label for="nameInput" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="John Doe" />
                </div>
                <div className="mb-3">
                    <label for="emailInput" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="passwordInput" className="form-label">Password</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage