import "../styles/hero.css";

export default function Hero() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  return (
    <>
      <div className="hero-title">
        <h1>Current Offers</h1>
        <p>Shop our {day} special offers, today only.</p>
      </div>
      <div className="hero-main-box">
        <div className="hero-photos">
          <div className="hero-box photo hero-card">Shop new offers</div>
          <div className="hero-card">
            <button className="card-badge">Modern living</button>
            <img
              className="modern photo"
              src="./modern.png"
              alt="modern living room photo"
            />
          </div>
          <div className="hero-card">
            <button className="card-badge">Kids rooms</button>
            <img
              className="kids-room photo"
              src="./kids.png"
              alt="kids room photo"
            />
          </div>
          <div className="hero-card">
            <button className="card-badge">Outdoor dining</button>
            <img
              className="outdoor photo"
              src="./outdoor-area.png"
              alt="outdoor area photo"
            />
          </div>
          <div className="hero-card">
            <button className="card-badge">Indoor dining</button>
            <img
              className="kitcken photo"
              src="./kitchen.png"
              alt="kitcken photo"
            />
          </div>

          <div className="hero-box2 photo hero-card">
            A selection of our favourites
          </div>
        </div>
      </div>
    </>
  );
}
