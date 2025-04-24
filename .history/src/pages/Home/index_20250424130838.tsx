import Container from "../../components/Container";
import hero from "../../assets/hero.png"
import Navbar from "../../components/Navbar";
import Features from "../Features";
import Partner from "../Partner";
import Onboarding from "../Onboarding";
import Earnings from "../Earnings";
import Faqs from "../Faqs";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <div className="pt-[70px]">
          <Container />
          <h2 className="md:text-7xl text-5xl font-[400] text-white gilroy-medium text-center pt-2">
            Seamless Payouts <br />
            Without Delays
          </h2>
          <div className="flex justify-center py-[70px]">
            <img src={hero} alt=""  className="h-["/>
          </div>
        </div>
      </div>
      <Features />
      <Partner />
      <Onboarding />
      <Earnings />
      <div id="faqs">
        <Faqs />
      </div>
      <Footer />
    </>
  );
}
