import React from "react";

export default class BookSearch extends React.Component {
  state = {
    books: [
      "1984",
      "Lord of the Flies",
      "Coraline",
      "House of Leaves",
      "Dracula",
      "Frankenstein"
    ],
    searchTerm: ""
  };

  render() {
    //get books that match search term
    let matchedBooks = this.state.books.filter((book) => {
      return book
        .toLocaleUpperCase()
        .includes(this.state.searchTerm.toLocaleUpperCase());
    });

    let bookList = matchedBooks.map((book) => {
      // return list item book
      return <li>{book}</li>;
    });

    return (
      <div className="book">
        <h2>Books</h2>
        <input
          value={this.state.searchTerm}
          onChange={(event) => {
            this.updateSearch(event);
          }}
        ></input>
        {/* displays book items  in unordered list*/}
        <ul>{bookList}</ul>
      </div>
    );
  }

  updateSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }
}
