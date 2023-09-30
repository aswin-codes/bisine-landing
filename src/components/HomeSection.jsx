
import { useEffect, useState } from "react";

import DotSphere from "../assets/dotsphere.png";
import Graphics from "../assets/graphics.png";
import BlueBar from "../assets/bluebar.png";
import Man from "../assets/Man.png";
import LinkedIn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import ScrollReveal from "scrollreveal";

const HomeSection = () => {
    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal("#main", {
          opacity: 0,
          origin: "bottom",
          distance: "20px",
          duration: 1500,
        });
        sr.reveal("#graphics", {
          opacity: 0,
          scale: 0,
          origin: "bottom",
          distance: "20px",
          duration: 1500,
        });
      });
  const [email, setEmail] = useState("");
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    Submit()
    console.log("Submitted");
  };
  function Submit() {

    if (isValidEmail(email)) {
      setEmail("");
      const formEle = document.querySelector("form");
      const formDatab = new FormData(formEle);
      console.log(formDatab.parameter);
      fetch(
        "https://script.google.com/macros/s/AKfycbzyhwCx_veO0uH1Gy3zUwcxks9DRFJBhzj9aKbu8Bako3DZarSgi3LoPNb6rkzxFdCF/exec",
        {
          method: "POST",
          body: formDatab,
        }
      )
      .then((res) => res.json()
      ).then((data) => {
        if(data.message == 'Success! added'){
          console.log(data);
          alert("Registered Successfully")
        } else {
          alert("Sorry, server error. Try again later")
        }
          
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Enter a valid email address")
    }
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="h-screen relative flex items-center"
      style={{
        background: "linear-gradient(to top right, #112C78 0%, #099CE9 75%)",
      }}
    >
      <div className="absolute top-0 ">
        <img
          src={DotSphere}
          alt="Vector"
          className="object-contain h-52 w-52"
        />
      </div>
      <img
        src={Graphics}
        alt="Vector"
        id="graphics"
        className="object-contain w-3/6 h-fit absolute bottom-0 right-16 hidden lg:block"
      />

      <div className="absolute">
        <img src={BlueBar} className=" h-screen" />
      </div>
      <div className="absolute flex items-end right-0 top-0">
        <img src={Man} alt="Man" className="h-48 w-48" />
      </div>

      <div id="main" className="z-20 px-10 h-screen flex flex-col items-start ">
        <div className="flex-1"></div>
        <div className="flex-1"></div>
        <h1 className="text-white uppercase text-6xl sm:text-9xl font-semibold">
          Bisine
        </h1>
        <h2 className="text-white text-lg sm:text-3xl">
          Your shop in a better Platform
        </h2>
        <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-4">
          <input
            placeholder="Enter your email"
            type="email"
            name="Email"
            value={email}
              onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-2 border-gray-400 text-xl mt-5 sm:mt-10 w-56 sm:w-96 rounded-md px-2 py-1"
          />

          <button
            type="submit"
            className="w-fit px-2 py-1 bg-white text-blue-900 font-semibold rounded-md border-2 border-white hover:border-2 hover:bg-transparent hover:text-white transition ease-in-out duration-300 hover:border-gray-400"
          >
            Join Waitlist
          </button>
        </form>
        <div className="flex-1"></div>
        <button
          onClick={() => scrollToSection("about")}
          className="px-4 py-1 rounded-xl border-2 border-white bg-transparent text-white w-fit md:text-2xl"
        >
          Learn more
        </button>
        <div className="flex-1"></div>
      </div>
      <div id="main" className="absolute right-1 flex flex-col gap-4">
        <a href={"https://www.linkedin.com/company/softzin"}>
          <img
            src={LinkedIn}
            alt="Instagram"
            className="object-contain h-7 w-7"
          />
        </a>
        <a href={"https://www.instagram.com/softzin.devs/"}>
          <img
            src={Instagram}
            alt="Instagram"
            className="object-contain h-7 w-7"
          />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
