// src/components/Preloader.jsx
import React, { useEffect, useState } from "react";
// import "./preloader.css";

export default function Preloader({ loading = true, autoHideMs = null }) {
  // internal show state so parent can pass loading prop OR we can auto-hide after timeout
  const [show, setShow] = useState(Boolean(loading));

  useEffect(() => {
    setShow(Boolean(loading));
  }, [loading]);

  useEffect(() => {
    if (autoHideMs && show) {
      const t = setTimeout(() => setShow(false), autoHideMs);
      return () => clearTimeout(t);
    }
  }, [autoHideMs, show]);

  if (!show) return null;

  return (
    <div className="preloader-overlay" role="status" aria-live="polite" aria-label="Loading">
      <div className="preloader-container">
        <div className="spinner" aria-hidden="true">
          <div className="dot dot1" />
          <div className="dot dot2" />
          <div className="dot dot3" />
        </div>
        <div className="preloader-text">Loading...</div>
      </div>
    </div>
  );
}
