
import BG from "../assets/bg.png";
import Point from "../assets/point.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


const Pricing = () => {
    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal("#tag", {
          opacity: 0,
          scale: 0,
          origin: "bottom",
          distance: "20px",
          duration: 1500,
        });
      });

      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <section
      id="pricing"
      className="h-screen px-5 relative flex flex-col items-center py-16"
      style={{ backgroundColor: "#0E519D" }}
    >
      <div className="absolute top-0 hidden lg:block">
        <img src={BG} className="h-screen" />
      </div>
      <h1 className="text-white font-semibold text-lg sm:text-3xl">
        Ready to unleash your business ?
      </h1>
      <p className="text-gray-300 sm:w-96 text-center mt-2">
        We are here to make you do digital business at an affordable cost with
        no code.
      </p>
      <div className="flex-1"></div>
      <div id='tag' className="bg-cyan-400  rounded-xl  overflow-hidden text-black">
        <div className="text-center p-2">
          <h1 className="text-3xl font-semibold ">Standard</h1>
        </div>
        <div style={{ height: 0.5 }} className="bg-black  w-full"></div>
        <div className="px-5 py-4">
          <h1 className="text-xl text-center">
            <strong className="text-2xl">₹ 250</strong>/month +{" "}
            <strong className="text-2xl">2%</strong> commission
          </h1>
          <h1 className="text-xl mt-5 font-semibold">What you get ?</h1>
          <div className="mt-5  text-md flex flex-col gap-2">
            <div className="flex px-2 gap-3 items-center">
              <img src={Point} alt="point" className="object-contain h-5" />
              <p>Creation of digital shop</p>
            </div>
            <div className="flex px-2 gap-3 items-center">
              <img src={Point} alt="point" className="object-contain h-5" />
              <p>Product Management</p>
            </div>
            <div className="flex px-2 gap-3 items-center">
              <img src={Point} alt="point" className="object-contain h-5" />
              <p>Order Management</p>
            </div>
            <div className="flex px-2 gap-3 items-center">
              <img src={Point} alt="point" className="object-contain h-5" />
              <p>Sales Analysis</p>
            </div>
            <div className="flex px-2 gap-3 items-center">
              <img src={Point} alt="point" className="object-contain h-5" />
              <p>Payment Management</p>
            </div>
          </div>
          <button onClick={()=> scrollToSection('home')} className="bg-blue-800 uppercase rounded-lg  py-2 text-white w-full mt-10">
            Join Waitlist for free
          </button>
        </div>
      </div>
      <div className="flex-1"></div>
    </section>
  );
};

export default Pricing;