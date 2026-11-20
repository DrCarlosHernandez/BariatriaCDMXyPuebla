import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Procedures from '@/components/Procedures';
import Benefits from '@/components/Benefits';
import BMICalculator from '@/components/BMICalculator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CredentialsGallery from '@/components/CredentialsGallery';
import Locations from '@/components/Locations';
import PaymentMethods from '@/components/PaymentMethods';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FinancingFloatingButton from '@/components/FinancingFloatingButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Procedures />
        <Benefits />
        <BMICalculator />
        <Testimonials />
        <FAQ />
        <CredentialsGallery />
        <Locations />
        <PaymentMethods />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <FinancingFloatingButton />
    </div>
  );
}

export default App;
