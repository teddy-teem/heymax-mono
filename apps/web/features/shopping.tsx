"use client";
import React, { useState } from "react";
import { Chip, HorizontalLine, NeonCircle, Typography } from "@heymax/ui";
import GridView from "../components/grid-view";

export default function Shopping() {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div style={styles.container}>
      <div style={styles.line}>
        <NeonCircle value={1} />
        <HorizontalLine />
      </div>
      <Typography variant="h1" style={{ color: "white", marginRight: 40 }}>
        Shop your favorite brands, earn miles
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={styles.containerStyle}>
          {[
            "Shop Online",
            "Book Travel",
            "Order Food",
            "Order Med",
            "Trade Online",
          ].map((text, ind) => (
            <button
              key={ind}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedTab(ind);
              }}
            >
              <Chip text={text} applyNeonEffect={selectedTab === ind} />
            </button>
          ))}
        </div>
        <GridView />
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "90dvh",
    marginTop: 50,
    marginLeft: 80,
    paddingBottom: 20,
    gap: 20,
  },
  line: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  containerStyle: {
    overflowX: "auto",
    whiteSpace: "nowrap",
    marginLeft: -40,
    scrollBehavior: "smooth",
    display: "flex",
    paddingTop: "10px",
    paddingBottom: "10px",
    gap: "12px",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  },
};
