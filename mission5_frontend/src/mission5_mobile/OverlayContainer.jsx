import React from "react";
import { useMobileOverlay } from "./OverlayContext";
import styles from "./MobileOverlay.module.css";

// Import overlay popups
import TopUpOverlay from "./pages/TopUpOverlay";
import ScanQRCode from "./pages/ScanQRCode";
import MoreMenu from "./pages/MoreMenu";

export default function OverlayContainer() {
  const { overlay, setOverlay } = useMobileOverlay();

  if (!overlay) return null; // ❗ No overlay → show nothing

  const close = () => setOverlay(null);

  return (
    <div className={styles.overlayBg} onClick={close}>
      <div
        className={styles.overlayCard}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {overlay === "topup" && <TopUpOverlay close={close} />}
        {overlay === "scanqr" && <ScanQRCode close={close} />}
        {overlay === "moremenu" && <MoreMenu close={close} />}
      </div>
    </div>
  );
}
