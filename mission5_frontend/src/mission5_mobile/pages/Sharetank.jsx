import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SharetankApp.module.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";


export default function Sharetank() {
  const navigate = useNavigate();

  // One tank document from Mongo
  const [tank, setTank] = useState(null);

  //  match the _id you seed in Mongo
  const tankId = "demo-tank-1";

  //  remaining “+ Add” slots
  const maxMembers = 5;
  const members = tank?.members || [];
  const remainingSlots = Math.max(0, maxMembers - members.length);

 // Load the tank + members from backend
  useEffect(() => {
    async function loadTank() {
      try {
        const res = await fetch(`${API_BASE}/api/sharetank/${tankId}`);
        if (!res.ok) throw new Error("Failed to load tank");
        const data = await res.json();
        setTank(data);
      } catch (err) {
        console.error("[loadTank] error:", err);
      }
    }

    loadTank();
  }, [tankId]);
   // Add a new member (third, fourth, fifth “+ Add”)
  async function handleAddMember() {
    try {
      // 1) create new member
      const res = await fetch(`${API_BASE}/api/sharetank/${tankId}/members`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "New friend",
          avatarUrl: "/image/icons/sharetank2/secondmember.jpg",
        }),
      });
     
     
       if (!res.ok) throw new Error("Failed to add member");

      // 2) reload tank so UI updates
      const res2 = await fetch(`${API_BASE}/api/sharetank/${tankId}`);
      if (!res2.ok) throw new Error("Failed to reload tank");
      const data = await res2.json();
      setTank(data);
    } catch (err) {
      console.error("[handleAddMember] error:", err);
    }
  }

  return (
    <div className={styles.screen}>
      <div className={styles.phone}>
        {/* ---- STATUS BAR ---- */}
        <div className={styles.statusBar}>
          <span className={styles.time}>9:41</span>
          <div className={styles.statusRight}>
            <img
              src="/image/icons/zicons/Lev.svg"
              alt="Status levels"
              className={styles.levels}
            />
          </div>
        </div>

        {/* ---- TOP TITLE BAR ---- */}
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
            <div className={styles.tankTitle} />
            <div className={styles.tankLogo}>
              <div />
            </div>
            <div className={styles.percentBlock}>
              <span className={styles.percentValue}>52</span>
              <span className={styles.percentSign}>%</span>
            </div>
          </div>

          <div className={styles.headerMiddleRow}>
            <div className={styles.volumeWrapper}>
              <div className={styles.volumeDot} />

              <img
                src="/image/icons/zicons/quatermoon.svg"
                alt=""
                className={`${styles.volumeArc} ${styles.volumeArcDark}`}
              />

              <img
                src="/image/icons/quatermoonwhite.svg"
                alt=""
                className={`${styles.volumeArc} ${styles.volumeArcLight}`}
              />

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
            {/* existing members from DB */}
            {members.map((m) => (
              <img
                key={m.name}
                className={styles.avatar}
                src={m.avatarUrl}
                alt={m.name}
              />
            ))}

            {/* remaining +Add slots */}
            {Array.from({ length: remainingSlots }).map((_, i) => (
              <div
                key={i}
                className={styles.addCircle}
                onClick={handleAddMember}
              >
                + Add
              </div>
            ))}
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
            onClick={() => navigate("/mobile/howitworks")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="/image/icons/zicons/trailer.svg"
              alt="trailer"
              className={styles.settingsIcon}
            />
            <div>
              <div className={styles.settingsHow}>How it works</div>
              <div className={styles.settingsSubtitlehow}>
                Help about Sharetank.
              </div>
            </div>
            <span className={styles.chevron}>›</span>
          </div>

          <div className={styles.divider} />

          <div
            className={styles.settingsRow}
            onClick={() => navigate("/mobile/add-vehicle")}
          >
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

        {/* ---- BOTTOM HANDLE ---- */}
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
      </div>
    </div>
  );
}
