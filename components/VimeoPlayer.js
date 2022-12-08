import Vimeo from "@u-wave/react-vimeo";

const VimeoPlayer = ({ videoLink, setIsVideoLoading, setPopUpIsActive }) => {
  return (
    <div className="w-full rounded-2xl relative overflow-hidden">
      <Vimeo
        video={videoLink}
        responsive={true}
        autoplay={true}
        muted={true}
        start={0}
        controls={true}
        width="100%"
        showTitle={false}
        showByline={false}
        onReady={() => {
          console.log("====================================");
          console.log("onReady!", videoLink);
          console.log("====================================");
        }}
        onLoaded={() => {
          console.log("====================================");
          console.log("onLoaded!", videoLink);
          console.log("====================================");
        }}
        onPlay={() => {
          console.log("====================================");
          console.log("onPlay!", videoLink);
          console.log("====================================");
          setIsVideoLoading(false);
        }}
        onPlaying={() => {
          console.log("====================================");
          console.log("onPlaying!", videoLink);
          console.log("====================================");
        }}
        onEnd={() => {
          console.log("====================================");
          console.log("onEnd!");
          console.log("====================================");
          setPopUpIsActive(false);
        }}
      />
    </div>
  );
};

export default VimeoPlayer;
