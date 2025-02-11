import BottomNavigation from "../../components/bottom-nav";
import Shopping from "../../features/shopping";

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
      <Shopping />
      <BottomNavigation currentIndex={1} buttonLabel=""/>
    </div>
  );
}
