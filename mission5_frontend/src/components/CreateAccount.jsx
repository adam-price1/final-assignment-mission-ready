import startUpBanner from "/image/banners/startupbanner.png";
import signUpImage from "/image/signUpImage.png";
import styles from "./CreateAccount.module.css";

function CreateAccount() {
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
          <form className={styles.signUpForm}>
            <label htmlFor="firstName">
              First name
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Please enter your first name here"
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
                required
              />
            </label>

            <label htmlFor="mobile">
              Mobile Number
              <input
                id="mobile"
                name="mobile"
                type="tel"
                inputMode="tel"
                pattern="[0-9+\-\s()]*"
                placeholder="Please enter your mobile number here"
              />
            </label>

            <div className={styles.signUpButtons}>
              <button type="button" className={styles.login}>
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
