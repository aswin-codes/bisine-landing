import { useEffect } from "react";
import UI1 from "../assets/ui1.png";
import UI2 from "../assets/ui2.png";
import UI3 from "../assets/ui3.png";
import ScrollReveal from "scrollreveal";

const SampleUI = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal("#screens", {
      opacity: 0,
      origin: "bottom",
      distance: "20px",
      duration: 1500,
    });
  });
  return (
    <section
      id="sampleui"
      className="min-h-screen lg:h-screen relative p-16"
      style={{ backgroundColor: "#099CE9" }}
    >
      <div className="h-full w-full ">
        <h1 className="text-3xl font-semibold">Sample UI</h1>
        <div
          
          className="mt-5 h-full flex-col lg:flex-row flex justify-center gap-10 items-center"
        >
          <img id="screens" src={UI1} className="h-4/6 object-contain" />
          <img id="screens" src={UI2} className="h-4/6 object-contain" />
          <img id="screens" src={UI3} className="h-4/6 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default SampleUI;
