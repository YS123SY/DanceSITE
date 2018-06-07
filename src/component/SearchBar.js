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
      category: [
        {
          name: "Soirée",
          isSelected: false
        },
        {
          name: "Zumba",
          isSelected: false
        },
        {
          name: "Salsa",
          isSelected: false
        },
        {
          name: "Oriental",
          isSelected: false
        },
        {
          name: "tango",
          isSelected: false
        },
        {
          name: "Tae Bo",
          isSelected: false
        },
        {
          name: "Street Dance",
          isSelected: false
        },
        {
          name: "bachata",
          isSelected: false
        },
        {
          name: "Danse de salon",
          isSelected: false
        },
        {
          name: "Compétition",
          isSelected: false
        }
      ]
    };
  }

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
