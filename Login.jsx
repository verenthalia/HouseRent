import React from 'react';

const Login = () => {

  return (

    <div className="container mt-5">

      <h1>Login</h1>

      <form>

        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
        />

        <button className="btn btn-dark">
          Login
        </button>

      </form>

    </div>

  );
};

export default Login;