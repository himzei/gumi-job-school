import { Hero } from "../components/frontend/Hero";
import { Footer } from "../components/frontend/Footer";
export default function layoutIntroduce({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Hero />
      </div>
      {children}
      <section className="bg-muted">
        <Footer />
      </section>
    </>
  );
}
