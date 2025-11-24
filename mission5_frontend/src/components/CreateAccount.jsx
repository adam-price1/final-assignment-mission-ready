import { useState } from "react";
import { useNavigate } from "react-router-dom";

import startUpBanner from "/image/banners/startupbanner.png";
import signUpImage from "/image/signUpImage.png";
import styles from "./CreateAccount.module.css";

function CreateAccount() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      localStorage.setItem("token", data.token);

      navigate("/sharetank");
    } catch (err) {
      setError("Network error — please try again.");
    }
  };
  return (
    <div>
      <section className={styles.createBanner}>
        <img
          src={startUpBanner}
          alt="Create Account Banner"
          className={styles.banner}
        />
        <h1 className={styles.bannerText}>Create Account</h1>
      </section>

      <main className={styles.signUp}>
        <section className={styles.signUpLeft}>
          <form className={styles.signUpForm} onSubmit={handleRegister}>
            {error && <p className={styles.error}>{error}</p>}
            <label htmlFor="firstName">
              First name
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Please enter your first name here"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="lastName">
              Last name
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Please enter your last name here"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>

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

            <label htmlFor="phone">
              Mobile Number
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="Please enter your mobile number here"
                value={formData.phone}
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

            <div className={styles.signUpButtons}>
              <button
                type="button"
                className={styles.login}
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button type="submit" className={styles.create}>
                Create Account
              </button>
            </div>
          </form>
        </section>

        <section className={styles.signUpRight}>
          <img src={signUpImage} alt="Person creating an account on a tablet" />
        </section>
      </main>
    </div>
  );
}

export default CreateAccount;
