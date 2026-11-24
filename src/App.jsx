
import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    name: "Sai Teja",
    email: "saiteja@gmail.com",
    phone: "9876543210",
    course: "Computer Science",
    bio: "Passionate about technology and learning new skills.",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Please enter email and password");
      return;
    }

    // Demo login
    if (
      loginData.email === "admin@gmail.com" &&
      loginData.password === "123456"
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: "", password: "" });
  };

  const handleProfileChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="logo">✦</div>

          <h1>Welcome Back!</h1>
          <p className="subtitle">Login to access your account</p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p className="demo-text">
            Demo Login: admin@gmail.com / 123456
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <nav className="navbar">
        <h2>MyProfile</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div className="profile-card">
        <div className="profile-avatar">👤</div>
        <h1>{user.name}</h1>
        <p className="profile-role">Student Profile</p>

        <div className="profile-details">
          <div>
            <label>Name</label>
            <input name="name" value={user.name} onChange={handleProfileChange} />
          </div>

          <div>
            <label>Email</label>
            <input name="email" value={user.email} onChange={handleProfileChange} />
          </div>

          <div>
            <label>Phone</label>
            <input name="phone" value={user.phone} onChange={handleProfileChange} />
          </div>

          <div>
            <label>Course</label>
            <input name="course" value={user.course} onChange={handleProfileChange} />
          </div>

          <div>
            <label>About Me</label>
            <textarea name="bio" value={user.bio} onChange={handleProfileChange} />
          </div>
        </div>

        <p className="success-message">✓ Login Successful</p>
      </div>
    </div>
  );
}

export default App;
