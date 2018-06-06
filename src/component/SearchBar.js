import React from "react";
import { Link } from "react-router-dom";
import "../styles/SearchBar.css";

const categoryList = [
  "Soirée",
  "Zumba",
  "Salsa",
  "Oriental",
  "tango",
  "Tae Bo",
  "Street Dance",
  "bachata",
  "Danse de salon",
  "Compétition"
];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }

  onChangeCategory = event => {
    const category = event.target.value;

    if (this.state.category.indexOf(category) < 0) {
      return this.setState({
        category: this.state.category.concat(category)
      });
    } else {
      this.setState({
        category: this.state.category.filter(el => el !== category)
      });
    }
  };

  render() {
    return (
      <div className="search-div">
        <div className="search-category-div">
          <span className="search-span-signIn">Recherche : </span>
          {categoryList.map((el, i) => (
            <div className="input-div-search-category">
              <input
                className="input-search"
                type="checkbox"
                onChange={this.onChangeCategory}
                value={el}
              />
              <p className="parag-search"> {el}</p>
            </div>
          ))}
          <Link to="">
            <input className="btn-search" type="button" value="Let's Go" />
          </Link>
        </div>
      </div>
    );
  }
}
export default SearchBar;
