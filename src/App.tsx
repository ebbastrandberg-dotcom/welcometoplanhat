import Nav from "./components/Nav";
import Hero from "./components/Hero";
import RoleOverview from "./components/RoleOverview";
import PlatformStory from "./components/PlatformStory";
import AIPlatform from "./components/AIPlatform";
import Recognition from "./components/Recognition";
import Customers from "./components/Customers";

import Editorial from "./components/Editorial";
import Culture from "./components/Culture";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RoleOverview />
        <Culture />
        <Team />
        <PlatformStory />
        <AIPlatform />
        <Recognition />
        <Customers />
        <Editorial />
      </main>
      <Footer />
    </>
  );
}
