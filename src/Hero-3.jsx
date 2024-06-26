import "../styles/hero3.css";

export default function Hero3() {
  return (
    <>
      <div className="hero-3">
        <div className="hero-3-title">
          <h1>New Products</h1>
          <p>Shop our latest products in our new collection.</p>
        </div>
        <div className="hero-3-photos">
          <div className="hero-3-card">
            <button className="card1-badge">Couches</button>
            <img
              className="image 1"
              src="./couch2.png"
              alt="photo of a couch"
            />
          </div>
          <div className="hero-3-card">
            <button className="card1-badge">Cabinets & Storage</button>
            <img
              className="image 2"
              src="./storage.png"
              alt="photo of storage cabinet"
            />
          </div>
          <div className="hero-3-card">
            <button className="card1-badge">Large Rugs</button>
            <img className="image 3" src="./rug2.png" alt="photo of rug" />
          </div>
          <div className="hero-3-card">
            <button className="card1-badge">Mirrors</button>
            <img className="image 4" src="./mirror.png" alt="photo of mirror" />
          </div>
        </div>
      </div>
    </>
  );
}
