import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };

  const handleSaveEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSavePassword = (event) => {
    setPassowrd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);

    // alert(
    //   `Login Successfull. These are details email: ${email} password: ${password}`,
    // );
    navigate("/home");
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            onChange={handleSaveEmail}
            type="email"
            placeholder="Email"
            required
          />

          <input
            onChange={handleSavePassword}
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="switch">
          Don't have an account?
          <span onClick={handleSignup}> Signup</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
