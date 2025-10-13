import Header from './components/Header';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import AccordionSection from './components/AccordionSection';
import PortfolioSection from './components/PortfolioSection';
import StatsSection from './components/StatsSection';
import ApproachSection from './components/ApproachSection';
import TestimonialSection from './components/TestimonialSection';
import LogosSection from './components/LogosSection';
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        {/* work process section */}
        <ProcessSection />
        {/* services / cards section */}
        <ServicesSection />
        {/* deliver perfectly / accordion section */}
        <AccordionSection />
        {/* portfolio grid */}
        <PortfolioSection />
        {/* stats / counters */}
        <StatsSection />
        {/* approach / marketing design slider */}
        <ApproachSection />
        {/* testimonials */}
        <TestimonialSection />
        {/* client logos */}
        <LogosSection />
        {/* blog stories */}
        <BlogSection />
        {/* call to action */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}