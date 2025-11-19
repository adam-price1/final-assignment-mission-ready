import { createContext, useContext, useState } from "react";

const OverlayContext = createContext();

export function OverlayProvider({ children }) {
  const [overlay, setOverlay] = useState(null);
  // overlay: "topup" | "scanqr" | "moremenu" | null

  return (
    <OverlayContext.Provider value={{ overlay, setOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
}

export function useMobileOverlay() {
  return useContext(OverlayContext);
}
