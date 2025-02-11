"use client";
import React from "react";
import Image from "next/image";
import { COLORS, Typography } from "@heymax/ui";

export default function BrandIntro() {
  return (
    <div
      style={styles.container}
    >
      <Image
        src={"./brand-logo.svg"}
        alt={"brand logo"}
        height={200}
        width={200}
      />
      <Image
        src={"./universe.svg"}
        alt={"brand logo"}
        height={400}
        width={400}
      />
      <div
        style={styles.brandMessageContainer}
      >
        <Typography variant="h1" style={{ color: "white" }}>
          Shop your way to a
        </Typography>
        <Typography variant="h1" style={{ color: COLORS.default.primary }}>
          Dream Vacation
        </Typography>
        <Typography
          variant="body"
          style={{
            paddingLeft: 210,
            paddingRight: 210,
            textAlign: "center",
            marginTop: 20,
            color: "white",
            marginBottom: "20px",
          }}
        >
          Turn your expenses into dream vacations by earning miles every time
          you shop
        </Typography>
      </div>
    </div>
  );
}



const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80dvh",
  },
  brandMessageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dot: {
    height: 8,
    borderRadius: 10,
    margin: "0 2px",
    display: "inline-block",
  },
  buttonChildren: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10
  },
};
