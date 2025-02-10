"use client";
import React from "react";
import Image from "next/image";
import { COLORS, HorizontalLine, Typography } from "@heymax/ui";

export default function index() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90dvh",
        paddingBottom: 20,
      }}
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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">Shop your way to a</Typography>
        <Typography variant="h1" style={{color: COLORS.default.primary}}>Dream Vacation</Typography>
        <Typography
          variant="body"
          style={{
            paddingLeft: 210,
            paddingRight: 210,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Turn your expenses into dream vacations by earning miles every time
          you shop
        </Typography>
        <HorizontalLine/>
      </div>
    </div>
  );
}
