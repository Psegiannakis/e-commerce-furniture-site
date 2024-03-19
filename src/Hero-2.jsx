import "../styles/hero2.css";

export default function Hero2() {
  return (
    <>
      <div className="hero-2">
        <div className="hero-2-title">
          <h1>Design Inspiration</h1>
          <p>Inspiration to help with your design and selection.</p>
        </div>
        <div className="hero-video">
          <video
            width={"60%"}
            loop="true"
            autoplay="autoplay"
            muted
            className="video"
            src="./vid.mov"
          >
            your browser does not support video playback.
          </video>
          <div className="video-box">
            More inspiring images{" "}
            <i class=" arrow bi1 bi-arrow-right-circle-fill"></i>
          </div>
        </div>
      </div>
    </>
  );
}
