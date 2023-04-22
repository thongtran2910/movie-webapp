import React from "react";
import UserNav from "../components/user-nav/UserNavComponent";

export default function LayoutTheme({ Component }) {
  return (
    <div>
      <UserNav />
      <div>
        <Component />
      </div>
    </div>
  );
}
