import React from "react";
import styles from "./Sharetank.module.css";

const FEATURES = [
  {
    img: "/image/sharetank/People.png",
    title: "Share with up to five people",
    body: "Whoever you share with and whatever your station, we've got your back.",
  },
  {
    img: "/image/sharetank/fuelpump.png", // middle white car image
    title: "Share everywhere, use anywhere",
    body: "Perhaps you're living in Tauranga but you can add pre-paid litres in Cambridge.",
  },
  {
    img: "/image/sharetank/phone.png",
    title: "Manage your account",
    body: "Z app has a simple and clear dashboard for you to keep track of your account in real time.",
  },
];

export default function SharetankPage() {
  return (
    <main className={styles.page}>

      {/* 🟧 Hero Banner */}
      <section
        className={styles.hero}
        style={{
          backgroundImage: "url('/image/banners/fuel banner header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className={styles.title}>Sharetank</h1>
      </section>

      {/* 🟨 Intro Text */}
      <section className={styles.content}>
        <h2 className={styles.herohead}>Fuel up, Share on — With Sharetank by Z!</h2>
        <p className={styles.herokick}>
          Get started by downloading Z app now to buy tomorrow’s fuel at today’s prices.
          Share your virtual tank with significant(s) of yours.
        </p>
      </section>

      {/* 🟩 3 Feature Cards */}
      <section className={styles.features}>
        {FEATURES.map((f, i) => (
          <article className={styles.card} key={i}>
            <div className={styles.cardImgWrap}>
              <img src={f.img} alt={f.title} className={styles.cardImg} />
            </div>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardBody}>{f.body}</p>
          </article>
        ))}
      </section>

      {/* 🟦 Why Section */}
      <section className={styles.why}>
        <div className={styles.whyText}>
          <h2 className={styles.whyTitle}>Why use Sharetank?</h2>
          <ul className={styles.whyList}>
            <li>
              Sharetank is the clever way to buy your fuel when the price is right for you,
              track it easily and share with your nearest and dearest.
            </li>
            <li>
              Have confidence you've bought your fuel at the best Z price in your area when
              you fuel up your virtual tank.
            </li>
            <li>
              Use fuel at any of our 200+ stations across New Zealand. Simply fill, scan or
              pay with Z app and drive away.
            </li>
          </ul>
        </div>

        <div className={styles.whyImgWrap}>
          <img
            src="/image/sharetank/fuelpump.png"
            alt="Fuel nozzle at a car"
            className={styles.whyImg}
          />
        </div>
      </section>

      {/* 🟣 App Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerInner}>
          <div className={styles.bannerText}>
            <h3>Only available on the Z app</h3>
            <div className={styles.badges}>
              <a
                href="https://apps.apple.com/nz/app/z-app/id1506675921"
                aria-label="Download on the App Store"
              >
                <img
                  src="/image/badges/app-store.svg"
                  alt="App Store"
                  className={styles.badge}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=nz.co.zenergy.z"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/image/badges/google-play.svg"
                  alt="Google Play"
                  className={styles.badge}
                />
              </a>
            </div>
          </div>

          <img
            src="/image/sharetank/banner-phones.png"
            alt="Phones showing the Z app"
            className={styles.bannerPhone}
          />
        </div>
      </section>
    </main>
  );
}
