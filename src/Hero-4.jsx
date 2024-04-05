import "../styles/hero4.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero4() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  const customId = "custom-id-yes";

  const notify = () =>
    toast("Added to cart!", {
      toastId: customId,
    });
  const fav = () =>
    toast("Added to favourites!", {
      toastId: customId,
    });

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
              className="image1 1"
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
              src={hovered1 ? "./pop-cabinet2.png" : "./pop-cabinet.png"}
              alt="photo of a cabinet"
            />
            <p className="hero-cards-title">HORT CABINET</p>
            <p className="hero-cards-text">White 67 x 90cm</p>

            <h4 className="hero-cards-price">
              <span>$149</span>
              <i className="bi bag bi-bag-fill" onClick={notify}></i>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                limit={1}
                theme="light"
              />
              <i class="bi bi-heart" onClick={fav}></i>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
              />
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
            <p className="hero-cards-title">ARGOST DESK</p>
            <p className="hero-cards-text">Black 160 x 50cm</p>
            <h4 className="hero-cards-price">
              <span>$279</span>{" "}
              <i className="bi bag bi-bag-fill" onClick={notify}></i>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
              />
              <i class="bi bi-heart" onClick={fav}></i>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
              />
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
            <p className="hero-cards-title"> JALN CABINET</p>
            <p className="hero-cards-text">Green 78 x 160cm</p>
            <h4 className="hero-cards-price">
              <span>$349</span>{" "}
              <i className="bi bag bi-bag-fill" onClick={notify}></i>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
              />
              <i class="bi bi-heart" onClick={fav}></i>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
              />
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
            <p className="hero-cards-title">HORV MIRROR LAMP</p>
            <p className="hero-cards-text">Green 65 x 65cm</p>
            <h4 className="hero-cards-price">
              <span>$159</span>{" "}
              <i className="bi bag bi-bag-fill" onClick={notify}></i>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
              />
              <i class="bi bi-heart" onClick={fav}></i>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
              />
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
