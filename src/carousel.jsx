export default function Carousel(props) {
  return (
    <div className="card">
      <img src={props.img} alt="catagory images" className="card-image" />
      <p className="card-title">{props.title}</p>
    </div>
  );
}
