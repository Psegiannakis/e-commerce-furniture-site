import "./hero2.css";

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
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
