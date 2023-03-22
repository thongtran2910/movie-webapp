import React from "react";
import Sidebar from "../components/sidebar/SidebarComponent";

export default function LayoutTheme({ Component }) {
  return (
    <div
      style={{ margin: "0 auto", display: "flex", backgroundColor: "#0f0f0f" }}
    >
      <div
        style={{
          width: "20%",
          borderRight: "1px solid #202020",
        }}
      >
        <Sidebar />
      </div>
      <>
        <Component />
      </>
    </div>
  );
}
