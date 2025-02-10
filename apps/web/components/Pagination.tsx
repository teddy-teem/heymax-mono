import React, { useEffect, useState } from "react";

interface PaginationProps {
  paginationIndex: number;
  items: any[];
}

const Pagination: React.FC<PaginationProps> = ({ paginationIndex, items }) => {
  const [animatedIndex, setAnimatedIndex] = useState(paginationIndex);

  useEffect(() => {
    setAnimatedIndex(paginationIndex);
  }, [paginationIndex]);

  return (
    <div style={styles.container}>
      {items.map((_, index) => {
        const width = index === paginationIndex ? 25 : 8;

        return (
          <span
            key={index}
            style={{
              ...styles.dot,
              width,
              backgroundColor: index === paginationIndex ? "white" : "gray",
              transition: "width 0.3s ease-in-out",
            }}
          />
        );
      })}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 8,
    borderRadius: 10,
    margin: "0 2px",
    display: "inline-block",
  },
};

export default Pagination;
