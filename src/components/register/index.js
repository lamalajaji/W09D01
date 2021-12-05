import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [token, setToken] = useState("");

  const signup = async () => {
    try {
      const newUser = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/register`,
        {
          email,
          passowrd,
        }
      );

      // localStorage.setItem("token", newUser.data.token);
      // localStorage.setItem("role", newUser.data.result.role);

      navigate("/list");
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="App">
      <h1> SignUp</h1>

      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="SignUp" onClick={signup} />
      </form>
    </div>
  );
}

export default Register;
