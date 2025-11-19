import React from "react";
import styles from "./SharetankApp.module.css";
import {useNavigate} from "react-router-dom";

export default function Sharetank() {
  const navigate =useNavigate();

  return (
    <div className={styles.screen}>
      <div className={styles.phone}>
        {/* ---- STATUS BAR ---- */}
        <div className={styles.statusBar}>
          <span className={styles.time}>9:41</span>
          <div className={styles.statusRight}>
            {/* Use your own icons here if you have them */}
            <img
                     src="/image/icons/zicons/Lev.svg"   // signal + wifi + battery in one icon
                     alt="Status levels"
                     className={styles.levels}
                   />
          </div>
        </div>

        {/* 🔹 NEW TOP TITLE BAR (white area) */}
<div className={styles.topTitleRow}>
  <div className={styles.topTitleLeft}>
   <img
    src="/image/icons/zicons/teardrop.svg"
    alt="Sharetank Drop"
    className={styles.topDropIcon}
  />
    <span className={styles.topTitleText}>Alex&apos;s Sharetank</span>
  </div>

   <img
            src="/image/icons/zicons/mobilearrow.svg"
            alt="arrow"
            className={styles.yopArrowIcon}
            />
</div>

        {/* ---- HEADER / GRADIENT CARD ---- */}
        <div className={styles.headerCard}>

          <div className={styles.headerTopRow}>
            <div className={styles.tankTitle}>
  
</div>

             <div className={styles.tankLogo}>
              <div>
                
              </div> 
            </div>
            
            <div className={styles.percentBlock}>
              <span className={styles.percentValue}>52</span>
              <span className={styles.percentSign}>%</span>
            </div>
          </div>

         <div className={styles.headerMiddleRow}>
  {/* wrapper for dot + arcs + white circle */}
  <div className={styles.volumeWrapper}>
    {/* pink glow/dot behind everything */}
    <div className={styles.volumeDot} />

    {/* dark blue quarter arc */}
    <img
      src="/image/icons/zicons/quatermoon.svg"
      alt=""
      className={`${styles.volumeArc} ${styles.volumeArcDark}`}
    />

    {/* white quarter arc (export a white version if you can) */}
    <img
      src="/image/icons/quatermoonwhite.svg"
      alt=""
      className={`${styles.volumeArc} ${styles.volumeArcLight}`}
    />

    {/* main white 115 L circle */}
    <div className={styles.volumeCircle}>
      <div className={styles.volumeInner}>
        <span className={styles.volumeNumber}>115 L</span>
        <span className={styles.volumeMax}>max 225 L</span>
      </div>
    </div>
  </div>

  <div className={styles.headerButtons}>
    <button className={styles.primaryBtn}>Top up now</button>
    <button className={styles.secondaryBtn}>Use fuel</button>
  </div>
</div>
</div>


        {/* ---- SHARED WITH ---- */}
        <div className={styles.sharedSection}>
          <div className={styles.sharedHeader}>
            <span className={styles.sharedTitle}>Shared with 2 member</span>
            <span className={styles.sharedSubtitle}>
              Share your fuel with up to 5 others
            </span>
          </div>

          <div className={styles.avatarRow}>
            {/* Replace src with your avatar images */}
            <img
              className={styles.avatar}
              src="/image/icons/zicons/firstmember.jpg"
              alt="Member 1"
            />
            <img
              className={styles.avatar}
              src="/image/icons/zicons/secondmember.jpg"
              alt="Member 2"
            />
            <button className={styles.addMember}>+ Add</button>
            <button className={styles.addMember}>+ Add</button>
            <button className={styles.addMember}>+ Add</button>
          </div>

          <button className={styles.activityBtn}>See tank activity</button>
        </div>

        {/* ---- SETTINGS LIST ---- */}
        <div className={styles.settingsList}>
          <div className={styles.settingsRow}>
            <img
            src="/image/icons/zicons/mobilebell.svg"
            alt="bell"
            className={styles.settingsIcon}
            />
            <div>
              <div className={styles.settingsTitle}>Notify me</div>
              <div className={styles.settingsSubtitle}>
                Get a note when my balance is below 15L.
              </div>
            </div>
            <div className={styles.switchTrack}>
              <div className={`${styles.switchThumb} ${styles.switchOn}`} />
            </div>
          </div>

          <div className={styles.divider} />

          <div
  className={styles.settingsRow}
  onClick={() => navigate("/howitworks")}
  style={{ cursor: "pointer" }}
>
  <img src="/image/icons/zicons/trailer.svg" alt="trailer" className={styles.settingsIcon} />
  <div>
    <div className={styles.settingsHow}>How it works</div>
    <div className={styles.settingsSubtitlehow}>Help about Sharetank.</div>
  </div>
  <span className={styles.chevron}>›</span>
</div>


          <div className={styles.divider} />

          <div className={styles.settingsRow}>
            <img
            src="/image/icons/zicons/credit.svg"
            alt="credit card"
            className={styles.settingsIcon}
            />
            <div>
              <div className={styles.settingsTitlepay}>Pay by plate</div>
              <div className={styles.settingsPay}>
                Link licence plate to a payment method.
              </div>
            </div>
            <span className={styles.chevron}>›</span>
          </div>
        </div>

        <div className={styles.bottomHandle}>
  <img
    src="/image/icons/zicons/bottomcurve.svg"
    alt=""
    className={styles.bottomCurve}
  />
  <img
    src="/image/icons/zicons/bottom-x.svg"
    alt="close"
    className={styles.bottomX}
  />
</div>


        {/* ---- BOTTOM NAV ---- */}
       <nav className={styles.tabBar}>
  {/* HOME */}
  <button className={styles.tab}>
    <img
      src="/image/icons/zicons/house.svg"
      alt="Home"
      className={styles.tabIconImg}
    />
    <span className={styles.tabLabel}>Home</span>
  </button>

  {/* QR CODE */}
  <button className={styles.tab}>
    <img
      src="/image/icons/qrcode.svg"
      alt="QR Code"
      className={styles.tabIconImg}
    />
    <span className={styles.tabLabel}>QR code</span>
  </button>

  {/* SHARETANK */}
  <button className={`${styles.tab} ${styles.tabActive}`}>
    <img
      src="/image/icons/zicons/appfueltank.svg"
      alt="Fuel Tank"
      className={styles.tabIconImg}
    />
    <span className={styles.tabLabel}>Share Tank</span>
  </button>

  {/* MORE */}
  <button className={styles.tab}>
    <img
      src="/image/icons/zicons/hamburger.svg"
      alt="More"
      className={styles.tabIconImg}
    />
    <span className={styles.tabLabel}>More</span>
  </button>
</nav>

      </div>
    </div>
  );
}
