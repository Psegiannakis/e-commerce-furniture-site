import "./styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="header-img" src="/logo.png" alt="furniture store logo" />

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Find what you are looking for."
        ></input>
      </div>
      <div className="header-title">
        <button className="btn"> About</button>
      </div>
      <div className="header-title-2">
        <button className="btn"> Cart</button>
      </div>
    </div>
  );
}
