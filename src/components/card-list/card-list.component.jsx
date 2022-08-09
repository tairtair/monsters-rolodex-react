// import { Component } from "react";
import Card from "./card/card.component";
import "./card-list.styles.css";
export default function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        //prettier-ignore
        return <Card monster={monster} />;
      })}
    </div>
  );
}

// class CardList extends Component {
//   // }
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           //prettier-ignore
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }
