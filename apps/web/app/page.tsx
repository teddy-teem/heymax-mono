import BottomNav from "../features/BottomNav";
import BrandIntro from "../features/BrandIntro";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100dvh" }}>
      <BrandIntro />
      <BottomNav />
    </div>
  );
}
