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
               <div className={styles.whyImgWrap}>
          <img
            src="/image/sharetank/fuelnozzel.png"
            alt="Fuel nozzle at a car"
            className={styles.whyImg}
          />
        </div>
      </section>

      {/* bottom Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerInner}>
          <div className={styles.bannerText}>
            <h2 className={styles.bannerTitle}>Only available on Z app</h2>
           <div className={styles.bannerCopy}>
            <div className={styles.badges}>
            
 <div className={styles.storeButtons}>
  {/* App Store button (uses your appstore.svg you moved to /public) */}
  <a
    href="https://apps.apple.com/nz/app/z-app/id1506675921"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.storeBtn}
  >
    <img src="/image/icons/appstore.svg" alt="" className={styles.icon} />
   
  </a>

  {/* Google Play button (inline SVG icon) */}
   {/* Google Play button */}
  <a
    href="https://play.google.com/store/apps/details?id=nz.co.zenergy.z"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.storeBtn}
  >
    <img src="/image/icons/Google-play.png" alt="Get it on Google Play" className={styles.icon} />
  </a>
</div>


                </div>
            </div>
          </div>

          <img
            src="/image/sharetank/evphone.png"
            alt="Phones showing the Z app"
            className={styles.bannerPhone}
          />
        </div>
      </section>
    </main>
  );
}
