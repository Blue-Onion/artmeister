import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
import Hero from "@/components/landing/Hero";
export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
    </main>
  );
}
