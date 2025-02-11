"use client";
import React from "react";
import { HorizontalLine, NeonCircle, Typography } from "@heymax/ui";
import RedeemCard from "../components/redeem-card";

const redeems = [
  {
    id: 1,
    title: "Transfer miles",
    body: "25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio",
    icon: "/icons/transfer-miles.png",
    instruction: "Best for Business & First Class",
  },
  {
    id: 2,
    title: "Fly and Claim",
    body: "Upload your flight ticket, and get reimbursed within 5 days.",
    icon: "/icons/fly-claim.png",
    instruction: "Best for Economy",
  },
  {
    id: 3,
    title: "Not flying soon",
    body: "You can always redeem Gift Cards with your Max Miles.",
    icon: "/icons/no-flight-soon.png",
    instruction: "Best for Starters",
  },
];

export default function Redeem() {
  return (
    <div style={styles.container}>
      <div style={styles.line}>
        <HorizontalLine />
        <NeonCircle value={2} />
      </div>
      <Typography
        variant="h1"
        style={{
          color: "white",
          marginRight: 40,
          textAlign: "right",
          width: "100%",
        }}
      >
        Redeem your trip
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          marginRight: -80
        }}
      >
        {redeems.map((i, index) => (
          <RedeemCard
            key={i.id}
            icon={i.icon}
            title={i.title}
            body={i.body}
            instruction={i.instruction}
          />
        ))}
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
    marginRight: 80,
    marginTop: 50,
    paddingBottom: 20,
    gap: 20,
  },
  line: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
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
