import Image from "next/image";
import React from "react";

interface ImageItem {
  url: string;
  height: number;
  width: number;
}

const images: ImageItem[] = [
  { url: "/images/Shopee-h.png", height: 104, width: 197 },
  { url: "/images/Lazada-h.png", height: 126, width: 110 },
  { url: "/images/HnM-h.png", height: 92, width: 92 },
  { url: "/images/fave-h.png", height: 92, width: 92 },
  { url: "/images/merchant-h.png", height: 65, width: 110 },
  { url: "/images/amazon.sg-h.png", height: 104, width: 157 },
  { url: "/images/fair-price-h.png", height: 104, width: 157 },
];

export default function GridView(): JSX.Element {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    marginTop: 20,
    width: '100%',
    flexWrap: "wrap",
    gap: "10px",
    flexGrow: 1,
    paddingRight: "200px",
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      {images.map((img, index) => (
        <Image
          key={index}
          src={img?.url}
          alt={`Image ${index}`}
          height={img?.height + 30}
          width={img?.width + 30}
          style={{
            borderRadius: "15px",
            flexGrow: 1,
            objectFit: "cover",
            ...(index === 2 || index === 3 ? { marginTop: "-18px" } : {}),
          }}
        />
      ))}
    </div>
  );
}
