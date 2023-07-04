import React from "react";
import "../CSS/loginCSS/main.css";
import "../CSS/loginCSS/util.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginAdmin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = () => {
    if (email === "admin@gmail.com" && pass === "123") navigate("/home");
    else {
      navigate("/");
      alert("Input wrong Password or Email, Please try again!!!");
    }
  };

  return (
    <div>
      <link
        rel="icon"
        type="image/png"
        href="../../../public/assets/loginBackground.jpg"
      />
      <div style={{ backgroundColor: "#666666" }}>
        <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100">
              <form class="login100-form">
                <span class="login100-form-title p-b-43">
                  Login to continue
                </span>
                <div class="wrap-input100">
                  <input
                    class="input100"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span class="focus-input100"></span>
                  <span class="label-input100">Email</span>
                </div>
                <div class="wrap-input100">
                  <input
                    class="input100"
                    type="password"
                    name="pass"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <span class="focus-input100"></span>
                  <span class="label-input100">Password</span>
                </div>
                <div class="container-login100-form-btn">
                  <button class="login100-form-btn" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </form>
              <div
                class="login100-more"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
