import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { CategoryId: 1, CategoryName: "Arabalar" },
      { CategoryId: 2, CategoryName: "Satılık Evler" },
      { CategoryId: 3, CategoryName: "Kiralık Daireler" },
      { CategoryId: 4, CategoryName: "Ev Eşyaları" },
      { CategoryId: 5, CategoryName: "Bahçe Malzemeleri" },
      { CategoryId: 6, CategoryName: "Veri Türleri" },
    ],
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title} Component</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.CategoryId}>
              {category.CategoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
