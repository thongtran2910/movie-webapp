import React from "react";

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
