import { useState } from "react";
import { useNavigate } from "react-router-dom";
import startUpBanner from "/image/banners/startupbanner.png";
import signInImage from "/image/signUpImage.png";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid login credentials.");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/sharetank");
    } catch {
      setError("Network error — please try again.");
    }
  };
  return (
    <div>
      <section className={styles.loginBanner}>
        <img src={startUpBanner} alt="Login Banner" className={styles.banner} />
        <h1 className={styles.bannerText}>Login</h1>
      </section>

      <main className={styles.signIn}>
        <section className={styles.signInLeft}>
          <form className={styles.signInForm} onSubmit={handleLogin}>
            {error && <p className={styles.error}>{error}</p>}
            <label htmlFor="email">
              E-mail
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Please enter your email address here"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Please enter your password here"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <div className={styles.signInButton}>
              <button type="submit" className={styles.login}>
                Login
              </button>
            </div>
          </form>
        </section>
        <section className={styles.signInRight}>
          <img src={signInImage} alt="Person signing in on a tablet" />
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
