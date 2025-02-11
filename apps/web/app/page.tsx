import { ROUTES } from "@heymax/constants";
import BottomNav from "../components/BottomNavigation";
import BrandIntro from "../features/BrandIntroduction";

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
      <BrandIntro />
      <BottomNav
        currentIndex={ROUTES[0]?.id || 0}
        buttonLabel={ROUTES[0]?.instruction || ""}
      />
    </div>
  );
}
