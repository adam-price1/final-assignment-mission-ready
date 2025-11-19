import startUpBanner from "/image/banners/startupbanner.png";
import signInImage from "/image/signUpImage.png";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div>
      <section className={styles.loginBanner}>
        <img src={startUpBanner} alt="Login Banner" className={styles.banner} />
        <h1 className={styles.bannerText}>Login</h1>
      </section>

      <main className={styles.signIn}>
        <section className={styles.signInLeft}>
          <form className={styles.signInForm}>
            <label htmlFor="email">
              E-mail
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Please enter your email address here"
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
