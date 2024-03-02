import Carousel from "./carousel";
import "./card.css";

export default function App() {
  return (
    <div className="cards-list">
      <Carousel img="./couch.png" title="Couches" />

      <Carousel img="./cabinet.png" title="Storage" />

      <Carousel img="./bed.png" title="Bedroom" />

      <Carousel img="./tables.png" title="Dining" />

      <Carousel img="./lamp.png" title="Lighting" />

      <Carousel img="./rug.png" title="Rugs & Carpets" />

      <Carousel img="./decoration.png" title="Decoration" />

      <Carousel img="./outdoor-chair.png" title="Outdoor" />

      <Carousel img="./plant.png" title="Plants & Pots" />

      <Carousel img="pan.png" title="Kitchenware" />
    </div>
  );
}
