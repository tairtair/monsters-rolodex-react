import "./search-box.styles.css";
export default function SearchBox({ className, placeholder, onChange }) {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChange}
//       />
//     );
//   }
// }
