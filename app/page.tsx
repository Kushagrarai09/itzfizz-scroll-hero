import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="next-section">
        <div className="next-inner">
          <h2>Scroll is the interface.</h2>
          <p>This continuation section makes the scroll-driven hero feel like a complete landing-page experience while keeping the assignment focused on motion, interaction and performance.</p>
        </div>
      </section>
    </main>
  );
}
