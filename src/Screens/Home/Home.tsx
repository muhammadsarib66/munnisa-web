import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Feature from "./Feature";
import Hero from "./Hero";
import Philosphy from "./Philosphy";
import Services from "./Services";

function Home() {
  return (
    <div className="">
      <Hero />
      <Feature />
      <Philosphy />
      <Services />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default Home;
