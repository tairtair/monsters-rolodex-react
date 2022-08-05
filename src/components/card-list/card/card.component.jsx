import { Component } from "react";
import "./card.styles.css";
class Card extends Component {
  render() {
    //prettier-ignore
    const {id,name,company: { bs }} = this.props.monster;
    return (
      <div key={id} className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=200x200`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{bs}</p>
      </div>
    );
  }
}
export default Card;
