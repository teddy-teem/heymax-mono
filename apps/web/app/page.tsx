import BottomNav from "../components/bottom-nav";
import BrandIntro from "../features/brand-introduction";

export default function Home() {
  return (
    <div style={{
      width: "100%",
      height: "100dvh",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    }}>
      <BrandIntro />
      <BottomNav currentIndex={0} buttonLabel={"See How It Works"} />
    </div>
  );
}
