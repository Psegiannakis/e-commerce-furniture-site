import "../styles/header.css";

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
        <button className="button">
          About <i class="bi1 bi-question-circle-fill"></i>
        </button>
      </div>
      <div className="header-title-2">
        <button className="button">
          Cart <i class="bi1 bi-bag-fill"></i>
        </button>
      </div>
    </div>
  );
}
