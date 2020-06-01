import React, { Component } from 'react';
import AdoptionForm from './AdoptionForm';

export default class PetPreview extends Component {
  constructor() {
    super();
    this.state = {
      petToPreview: {},
    };
    this.previewPet = this.previewPet.bind(this);
    this.adoptSelectedPet = this.adoptSelectedPet.bind(this);
  }
  previewPet(evt) {
    this.props.pets.find((pet) => {
      if (pet.name === evt.target.value) {
        this.setState({ petToPreview: pet });
      }
    });
  }
  adoptSelectedPet() {
    this.props.adoptPet(this.state.petToPreview);
  }

  render() {
    return (
      <div className="preview">
        <div>
          <h5>Preview:</h5>

          <AdoptionForm
            pets={this.props.pets}
            previewPet={this.previewPet}
            adoptSelectedPet={this.adoptSelectedPet}
          />
          <img src={this.state.petToPreview.imgUrl} />
        </div>
      </div>
    );
  }
}
