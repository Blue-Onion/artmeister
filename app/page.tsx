import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
import Hero from "@/components/landing/Hero";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <section id="feature" className="min-h-screen ">
        <div className="pt-20">
          <h2 className="text-4xl font-bold ">Next Section</h2>
          <p className="mt-4">
            This content should scroll over the video background.
          </p>
        </div>
      </section>
      <section className="min-h-screen bg-red-900">
        <div className="pt-20">
          <h2 className="text-4xl font-bold ">Next Section</h2>
          <p className="mt-4">
            This content should scroll over the video background.
          </p>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="pt-20">
          <h2 className="text-4xl font-bold ">Next Section</h2>
          <p className="mt-4">
            This content should scroll over the video background.
          </p>
        </div>
      </section>
    </main>
  );
}
