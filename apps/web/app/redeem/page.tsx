import BottomNavigation from "../../components/bottom-nav";
import Redeem from "../../features/redeem";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Redeem />
      <BottomNavigation currentIndex={2} buttonLabel="Get Started"/>
    </div>
  );
}
