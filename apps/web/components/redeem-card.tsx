import React from "react";
import { COLORS, Typography } from "@heymax/ui";
import Image from "next/image";

export interface RedeemCardProp {
  icon: string;
  title: string;
  body: string;
  instruction: string;
}

export default function RedeemCard({
  icon,
  title,
  body,
  instruction,
}: RedeemCardProp) {
  return (
    <div style={styles.container}>
      <Image src={icon} height={60} width={60} alt={"Icons"} />
      <div style={styles.content}>
        <Typography variant="h3" style={{ color: "white" }}>
          {title}
        </Typography>
        <Typography style={{ color: "gray", flexWrap: "wrap" }}>
          {body}
        </Typography>
        <Typography style={{ color: COLORS.default.primary }}>
          {instruction}
        </Typography>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#1C0E4B",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    cursor: 'pointer',
    width: "100%"
  },
  content: {
    flexDirection: "column",
    width: "80%",
    gap: 8,
  },
};
