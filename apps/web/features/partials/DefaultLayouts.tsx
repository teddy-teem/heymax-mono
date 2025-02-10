import { COLORS } from "@heymax/ui";
import React from "react";

export default function DefaultLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{   
        backgroundColor: COLORS.default.background,
        maxWidth: "720px",
        minWidth: "500px",
        height: "100%"
      }}
    >
      {children}
    </div>
  );
}
