import React, { Component } from "react";
import axios from "axios";
import Pet from "../Pet/Pet";

class Home extends Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    this.getPets();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.update !== this.props.update) {
      this.getPets();
    }
  }

  getPets = () => {
    axios
      .get("http://localhost:2002/api/pets/", {
        headers: {
          accept: "application/json",
        },
      })
      .then((resp) => {
        this.setState({ pets: resp.data });
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="Pet">
        <h1>Lista de mascotas:</h1>
        <ul>
          {this.state.pets.map((pet) => {
            return (
              <Pet
                name={pet.name}
                age={pet.age}
                specie={pet.species}
                image={pet.image}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Home;
