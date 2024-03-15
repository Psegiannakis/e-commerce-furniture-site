import "./hero4.css";
import { useState } from "react";

export default function Hero4() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  return (
    <>
      <div className="hero-4">
        <div className="hero-4-title">
          <h1>Popular Products</h1>
          <p>A collection of our most popular products.</p>
        </div>
        <div className="hero-4-photos">
          <div className="hero-4-card">
            <div className="hero-badge">Best Seller</div>
            <img
              className={`image1 ${hovered1 ? "image-transition" : ""}`}
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
              src={hovered1 ? "./pop-cabinet2.png" : "./pop-cabinet.png"}
              alt="photo of a cabinet"
            />
            <p className="cards-title">HORT CABINET</p>
            <p className="cards-text">White 67 x 90cm</p>
            <h4 className="cards-price">
              $149{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </h4>
          </div>
          <div className="hero-4-card">
            <div className="hero-badge">Best Seller</div>
            <img
              className="image1 2"
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
              src={hovered2 ? "./pop-desk2.png" : "./pop-desk.png"}
              alt="photo of a desk"
            />
            <p className="cards-title">ARGOST DESK</p>
            <p className="cards-text">Black 160 x 50cm</p>
            <h4 className="cards-price">
              $279{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </h4>
          </div>
          <div className="hero-4-card">
            <div className="hero-badge">Best Seller</div>
            <img
              className="image1 3"
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
              src={
                hovered3
                  ? "./pop-green-cabinet2.png"
                  : "./pop-green-cabinet.png"
              }
              alt="photo of green cabinet"
            />
            <p className="cards-title"> JALN CABINET</p>
            <p className="cards-text">Green 78 x 160cm</p>
            <h4 className="cards-price">
              $349{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </h4>
          </div>
          <div className="hero-4-card">
            <div className="hero-badge">Best Seller</div>
            <img
              className="image1 4"
              onMouseEnter={() => setHovered4(true)}
              onMouseLeave={() => setHovered4(false)}
              src={hovered4 ? "./pop-lamp2.png" : "./pop-lamp.png"}
              alt="photo of a mirror lamp"
            />
            <p className="cards-title">HORV MIRROR LAMP</p>
            <p className="cards-text">Green 65 x 65cm</p>
            <h4 className="cards-price">
              $159{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
