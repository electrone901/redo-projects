import React from 'react';

export default function AdoptionForm(props) {
  const { pets, previewPet, adoptSelectedPet } = props;
  return (
    <div>
      <select name="" id="" onChange={previewPet}>
        {pets.map((pet) => {
          return (
            <option key={pet.name} value={pet.name}>
              {pet.name}
            </option>
          );
        })}
      </select>
      <button onClick={adoptSelectedPet}></button>
    </div>
  );
}
