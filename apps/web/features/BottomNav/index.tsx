import React from "react";

import { COLORS } from "@repo/ui";
import Pagination from "../../components/Pagination";

interface BottomNavigationProps {
  paginationIndex: number;
  items: any[];
  onNext: () => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ paginationIndex, items, onNext }) => {
  return (
    <div style={styles.container}>
      <Pagination paginationIndex={paginationIndex} items={items} />
      <button onClick={onNext} style={styles.button}>
        <div style={styles.buttonChild}>
          <span style={styles.buttonText}>{items[paginationIndex].instruction}</span>
          {items[paginationIndex].showArrow && (
            <RightArrowIcon
              {...(!items[paginationIndex].instruction && {
                height: 20,
                width: 20,
              })}
            />
          )}
        </div>
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: COLORS.default.background,
    width: "100%",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #231746",
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  buttonChild: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  buttonText: {
    color: "white",
    fontSize: "16px",
  },
};

export default BottomNavigation;