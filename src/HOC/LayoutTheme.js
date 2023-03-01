import React from "react";
import Navigate from "../components/navigate/NavigateComponent";

export default function LayoutTheme({ Component }) {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* <Navigate /> */}
      <div>
        <Component />
      </div>
    </div>
  );
}
