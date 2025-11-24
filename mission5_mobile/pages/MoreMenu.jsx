import React from "react";
import styles from "./MoreMenu.module.css";
import { useNavigate } from "react-router-dom";

export default function MoreMenu() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "My account",
      items: [
        { icon: "/image/icons/more/user.png", label: "Personal information" },
        { icon: "/image/icons/more/bell.png", label: "Notification settings" },
        { icon: "/image/icons/more/star.png", label: "Loyalty card" },
        { icon: "/image/icons/more/activity.png", label: "Recent activity" },
        { icon: "/image/icons/more/ev.png", label: "EV charge tag" },
      ],
    },
    {
      title: "Promotions",
      items: [
        { icon: "/image/icons/more/ticket.png", label: "My vouchers" },
        { icon: "/image/icons/more/gift.png", label: "Invite friends" },
      ],
    },
    {
      title: "Help & Support",
      items: [
        { icon: "/image/icons/more/map.png", label: "Find a Z" },
        { icon: "/image/icons/more/legal.png", label: "Legal" },
        { icon: "/image/icons/more/feedback.png", label: "Give Feedback" },
        { icon: "/image/icons/more/contact.png", label: "Contact us" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <button onClick={() => navigate(-1)} className={styles.backBtn}>
          <img src="/image/icons/more/back.png" alt="Back" />
        </button>
        <div className={styles.titleGroup}>
          <img
            src="/image/icons/more/menu.png"
            alt="Menu"
            className={styles.menuIcon}
          />
          <h2>More</h2>
        </div>
      </header>

      {/* Content */}
      <div className={styles.content}>
        {sections.map((section, i) => (
          <div key={i} className={styles.section}>
            <h4>{section.title}</h4>
            {section.items.map((item, idx) => (
              <div key={idx} className={styles.item}>
                <div className={styles.left}>
                  <img
                    src={item.icon}
                    alt={item.label}
                    className={styles.icon}
                  />
                  <span>{item.label}</span>
                </div>
                <img
                  src="/image/icons/more/arrow-right.png"
                  alt=">"
                  className={styles.arrow}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
