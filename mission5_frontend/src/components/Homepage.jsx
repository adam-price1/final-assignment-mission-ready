import FeaturesBlock from "./HomeComponent/FeaturesBlock.jsx";
// image import
import homeBanner from "/image/banners/bannerHomePage.png";
import heroImage from "/image/homepageHeroImage.png";
import homepageButton from "/image/buttons/homepageButton.png";
// styles import
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div>
      <section className={styles.homeBanner}>
        <img src={homeBanner} alt="homepage banner" className={styles.banner} />
        <h1 className={styles.bannerText}>Welcome to Z</h1>
      </section>
      <div>
        <img
          src={heroImage}
          alt="homepage banner"
          className={styles.heroImage}
        />
      </div>
      <section className={styles.findStationBanner}>
        <img src={homeBanner} alt="find a station" className={styles.banner} />
        <h1 className={styles.findStationText}>Find a Z Station</h1>
        <img
          src={homepageButton}
          alt="homepage button"
          className={styles.homeButton}
        />
      </section>
      <main>
        <FeaturesBlock
          kicker="Sharetank"
          title="Buy fuel and share it with up to 5 friends and family"
          body="Top up Sharetank and let your favorite people fill up at your price."
          ctaLabel="Sharetank"
          ctaHref="/sharetank"
          imageSrc="/image/sharetank.png"
          imageAlt="Person filling car at pump"
        />
        <FeaturesBlock
          title="Price comparison"
          body="Compare fuel prices with nearby stations."
          ctaLabel="Price comparison"
          ctaHref="/price-comparison"
          imageSrc="/image/priceSign.png"
          imageAlt="Z price board"
          reverse
        />
        <FeaturesBlock
          title="Order food online"
          body="Order food and drinks via the app and pick up at the station."
          ctaLabel="Order Food"
          ctaHref="/selection"
          imageSrc="/image/food.png"
          imageAlt="Coffee and sandwich"
        />
      </main>
    </div>
  );
}

export default Homepage;
