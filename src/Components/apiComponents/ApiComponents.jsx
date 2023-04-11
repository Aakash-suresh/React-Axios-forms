import axios from 'axios';
import React, { Component } from 'react';
import '../apiComponents/ApiComponents.css'

export class ApiComponents extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      errorMessage: ''
    };
  }

  componentDidMount() {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        // console.log(response);
        this.setState({ characters: response.data.results });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMessage: 'Error retrieving data' });
      });
  }

  render() {
    const { characters, errorMessage } = this.state;
    return (
      <React.Fragment>
        <div className="title"><center><strong>List of Characters</strong></center></div>
        <div className="container">
          {characters.length
            ? characters.map((character, index) => (
                <div key={index} className="box">
                  <img src={character.image} alt={character.name} className="character-image" />
                  <div className="character-details">
                    <div className="character-name">{character.name}</div>
                    <div className="character-status">{character.status}</div>
                    <div className="character-species">{character.species}</div>

                  </div>
                </div>
              ))
            : null}
          {errorMessage ? <div className="error">{errorMessage}</div> : null}
        </div>
      </React.Fragment>
    );
  }
}




export default ApiComponents