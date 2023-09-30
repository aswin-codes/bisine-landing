
import React, { useEffect } from "react";
import ESC from "../assets/easy-shop-creation.png";
import GCR from "../assets/global_customer_reach.jpg";
import ST from "../assets/secure_transactions.png";
import PT from "../assets/product_management.jpg";
import RR from "../assets/review_rating.png";
import SA from "../assets/seller_analytics.png";
import ScrollReveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal("#features", {
      opacity: 0,
      origin: "bottom",
      distance: "20px",
      duration: 1500,
    });
  });
  return (
    <section
      id="about"
      className="min-h-screen h-fit relative p-5 sm:p-10 lg:p-16 grid grid-flow-row sm:grid-cols-2  lg:grid-cols-3 gap-5"
      style={{ backgroundColor: "#112C78" }}
    >
      <div className="absolute top-0 hidden lg:block">
        <img src={BG} className="h-screen" />
      </div>

      <div
        id="features"
        className=" flex flex-col z-10 items-center justify-center gap-2"
      >
        <div >
          <img src={ESC} className="object-contain h-32" />
        </div>
        <h1 className="font-semibold text-2xl text-center">
          Easy Shop Creation
        </h1>
        <p className="text-sm text-center w-5/6">
          Seamlessly set up your online shop with a few clicks, allowing you to
          showcase and sell your products hassle-free.
        </p>
      </div>
      <div
        id="features"
        className=" flex flex-col items-center justify-center gap-2"
      >
        <div >
          <img src={GCR} className="object-contain h-32" />
        </div>
        <h1 className="font-semibold text-2xl text-center">
          Global Customer Reach
        </h1>
        <p className="text-sm w-5/6 text-center">
          Expand your customer base globally, connecting your products with
          buyers from all corners of the world.
        </p>
      </div>
      <div
        id="features"
        className=" flex flex-col items-center justify-center gap-2"
      >
        <div >
          <img src={ST} className="object-contain h-32" />
        </div>
        <h1 className="font-semibold text-2xl text-center">
          Secure Transactions
        </h1>
        <p className="text-sm w-5/6 text-center">
          Enjoy peace of mind with our secure payment system, ensuring safe and
          reliable transactions for both buyers and sellers.
        </p>
      </div>
      <div
        id="features"
        className=" flex flex-col items-center justify-center gap-2"
      >
        <div >
          <img src={PT} className="object-contain h-32" />
        </div>
        <h1 className="font-semibold text-2xl text-center">
          Easy Product Management
        </h1>
        <p className="text-sm w-5/6 text-center">
          Effortlessly manage your product listings, inventory, and pricing to
          keep your shop up to date and competitive.
        </p>
      </div>
      <div
        id="features"
        className=" flex flex-col items-center justify-center gap-2"
      >
        <div >
          <img src={RR} className="object-contain h-32" />
        </div>
        <h1 className="font-semibold text-2xl text-center">
          Reviews and Ratings
        </h1>
        <p className="text-sm w-5/6 text-center">
          Build trust and credibility by collecting valuable feedback from
          satisfied customers, helping you enhance your shop's reputation
        </p>
      </div>
      <div
        id="features"
        className="flex flex-col items-center justify-center gap-2"
      >
        <div>
          <img src={SA} className="object-contain h-32" />
        </div>
        <h1 className="font-semibold text-2xl text-center">Seller Analytics</h1>
        <p className="text-sm w-5/6 text-center">
          Gain insights into your shop's performance with detailed analytics,
          empowering you to make data-driven decisions and boost your sales.
        </p>
      </div>
    </section>
  );
};

export default About;