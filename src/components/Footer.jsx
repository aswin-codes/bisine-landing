import React from "react";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";

const Footer = () => {
  const toEmail = "softzin.devs@gmail.com"; // Replace with the recipient's email address

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${toEmail}`;
    window.location.href = mailtoLink;
  };
  return (
    <footer
      id="contact"
      style={{ backgroundColor: "#009FF8" }}
      className=" py-8 px-14 flex flex-col items-center justify-center"
    >
      <div>
        <p className="w-72 text-center text-white font-oxanium text-3xl">
          {" "}
          Have any questions or suggestions ?
        </p>
      </div>
      <div
        onClick={handleEmailClick}
        className="text-white text-lg px-4 py-2 border rounded-lg mt-4 cursor-pointer"
      >
        <p>Let us know</p>
      </div>
      <div className="border border-white opacity-25 h-0 rounded-sm w-72 mt-4"></div>
      <div className="flex justify-between w-72 mt-4 ">
        <a href={"https://www.instagram.com/softzin.devs/"}>
          <img
            alt="Instagram"
            className="h-6 cursor-pointer"
            src={Instagram}
          />
        </a>
        <a href={"https://www.linkedin.com/company/softzin/"}>
          <img
            alt="Instagram"
            className="h-6 cursor-pointer"
            src={LinkedIn}
          />
        </a>
      </div>
      <div
        className="text-white text-xs opacity-50 mt-4 flex cursor-pointer"
        onClick={() =>
          window.location.replace("https://www.instagram.com/softzin.devs/")
        }
      >
        Designed and Developed by<p className="underline ml-2">Softzin</p>
      </div>
    </footer>
  );
};

export default Footer;