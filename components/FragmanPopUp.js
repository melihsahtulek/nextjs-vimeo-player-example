import { useState } from "react";
import { useEffect } from "react";
import VimeoPlayer from "../components/VimeoPlayer";

const FragmanPopUp = ({ videoLink, setPopUpIsActive }) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    console.log("====================================");
    console.log("FragmanPopUp Yüklendi");
    console.log("====================================");

    return () => {
      console.log("====================================");
      console.log("FragmanPopUp DOM'dan Kaldırıldı!");
      console.log("====================================");
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black/90 z-40 flex items-center justify-center animate-fate-in-speed" onClick={() => setPopUpIsActive(false)}>
      <div className={isVideoLoading ? "block" : "hidden"}>
        <h3 className="text-white text-3xl">Loading...</h3>
      </div>
      <div className={isVideoLoading ? "hidden" : "lg:w-1/2 md:w-2/3 w-full px-3"}>
        <VimeoPlayer videoLink={videoLink} isVideoLoading={isVideoLoading} setIsVideoLoading={setIsVideoLoading} setPopUpIsActive={setPopUpIsActive} />
      </div>
    </div>
  );
};

export default FragmanPopUp;
