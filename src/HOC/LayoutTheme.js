import React from "react";
import Sidebar from "../components/sidebar/SidebarComponent";

export default function LayoutTheme({ Component }) {
  const route = window.location.pathname;
  const sidebarWidth = route === "/explore" ? "100px" : "20%";
  const componentWidth = sidebarWidth === "20%" ? "80%" : "100%";
  const display = route === "/auth" ? "none" : "block";
  return (
    <div
      style={{ margin: "0 auto", display: "flex", backgroundColor: "#0f0f0f" }}
    >
      <div
        style={{
          width: `${sidebarWidth}`,
          display: `${display}`,
        }}
      >
        <Sidebar />
      </div>
      <div style={{ width: `${route === "/auth" ? "100%" : componentWidth}` }}>
        <Component />
      </div>
    </div>
  );
}
