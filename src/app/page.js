import Logo from "@/components/logo/logo";
import Navs from "@/components/navs/navs";
import Socials from "@/components/socials/socials";
import Landing from "@/pages/landing";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Logo />
      <Navs />
      <Socials />
      <Landing />
    </main>
  );
}
