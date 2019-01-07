import React, { Component } from "react";
import API from "../utils/API";

class ResultList extends Component {
  handleSave = id => {
    let saveB = {
      volumeInfo: {
        title: "Placeholder",
        author: "Placeholder",
        description: "Placeholder",
        imageLinks: { thumbnail: "Placeholder" },
        infoLink: "Placeholder"
      }
    };
    for (let i = 0; i < this.props.results.length; i++) {
      if (this.props.results[i].id === id) {
        saveB = this.props.results[i];
      }
    }


    API.saveBook({
      title: saveB.volumeInfo.title,
      author: saveB.volumeInfo.authors,
      description: saveB.volumeInfo.description,
      image: saveB.volumeInfo.imageLinks.thumbnail,
      link: saveB.volumeInfo.infoLink
    })
      .then()
      .catch(err => console.log(err));
  };

  render() {
    return (
      <ul className="list-group">
        {this.props.results.map(result => (
          <li className="list-group-item" key={result.id}>
            <h4>
              Title: {('title' in result.volumeInfo) ? result.volumeInfo.title : "N/A"} Author:{" "}
              {('authors' in result.volumeInfo) ? result.volumeInfo.authors.toString() : "N/A"}{" "}
            </h4>
            <h5>Description: {('description' in result.volumeInfo) ? result.volumeInfo.description : "N/A"}</h5>
            <img src={('imageLinks' in result.volumeInfo) ? result.volumeInfo.imageLinks.thumbnail : "N/A" } />
            <h5>
              <a href={('infoLink' in result.volumeInfo) ? result.volumeInfo.infoLink : "N/A"}>More Info</a>{" "}
            </h5>
            <button onClick={() => this.handleSave(result.id)}>Save</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ResultList;
