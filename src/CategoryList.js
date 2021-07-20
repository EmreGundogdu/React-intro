import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { CategoryId: 1, CategoryName: "Beverages" },
      { CategoryId: 2, CategoryName: "Condiments" },
    ],
    currentCategory: "",
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.CategoryName })
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title} Component</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.changeCategory(category)}
              key={category.CategoryId}
            >
              {category.CategoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
