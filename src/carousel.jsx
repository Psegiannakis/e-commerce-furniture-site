export default function Carousel(props) {
  return (
    <div className="cards">
      <img src={props.img} alt="catagory images" className="cards-image" />
      <p className="cards-title">{props.title}</p>
    </div>
  );
}
