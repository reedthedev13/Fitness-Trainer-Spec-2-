import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#F3F4F6] text-[#111827] overflow-x-hidden">
      <Hero />
      <Services />
      <Gallery />
      <BookingForm />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
