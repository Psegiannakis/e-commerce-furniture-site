export default function Carousel(props) {
  return (
    <div className="card">
      <img src={props.img} alt="catagory images" className="card-image" />
      <div className="card--stats">
        <img src="" alt="" className="card-star" />
      </div>
      <p className="card-title">{props.title}</p>
    </div>
  );
}
