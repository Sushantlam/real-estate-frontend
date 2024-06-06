import { useContext, useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import ApiRequest from "../../lib/ApiRequest";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

const Register = () => {

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    const {updateUser} = useContext(AuthContext)
  
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError("");
      const formData = new FormData(e.target);
  
      const email = formData.get("email");
      const password = formData.get("password");
      const username = formData.get("username");
  
      try {
        const res = await axios.post("http://localhost:4000/api/auth/register", {
          email,
          password,
          username,
        });
        console.log(res);
  
       
  
         navigate("/login");
      } catch (err) {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
  return (
    <><div className="login">
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
        <input
          name="username"
          required
         
          type="text"
          placeholder=" Username"
        />
        <input
          name="email"
          required
         
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
        />
        <button disabled={isLoading}>Login</button>
        {error && <span>{error}</span>}
        <Link to="/register">{"Don't"} you have an account?</Link>
      </form>
    </div>
    <div className="imgContainer">
      <img src="/bg.png" alt="" />
    </div>
  </div></>
  )
}

export default Register