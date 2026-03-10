import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. when user submitted the form -> alert popup with a success message
// 2. after that it should be redirected to login page
function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const navigate = useNavigate();
  // useNavigate -> is a method or a fucntion used for navigations. which is given by react-router-dom
  const handleLogin = () => {
    navigate("/");
  };
  const handleSaveFullName = (event) => {
    // console.log("Full Name");
    let full_name = event.target.value;
    setFullName(full_name);
  };
  //   console.log(fullName);

  const handelSaveEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSavePassword = (event) => {
    setPassowrd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, "eamil");
    console.log(password, "passowrd");
    console.log(fullName, "full name");

    alert(
      `Signup Successfull. These are details name:${fullName} email: ${email} password: ${password}`,
    );
    navigate("/login");
  };
  return (
    <div className="page">
      <div className="card">
        <h2>Signup</h2>

        <form onSubmit={handleSubmit}>
          <input
            onChange={handleSaveFullName}
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            onChange={handelSaveEmail}
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

          <button type="submit">Signup</button>
        </form>

        {/* <Link */}
        <p className="switch">
          Already have an account?
          <span onClick={handleLogin}> Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
