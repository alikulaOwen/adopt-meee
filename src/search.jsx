

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-unresolved */

import React, { useEffect, useState } from "react";
import Pet from "./pet";

const ANIMAL = ["dog", "cat", "reptile", "bird"];

export default function search() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] =useState('');
  const [pets, setPets] = useState([])
  const breeds = [];


  useEffect(() => {
    requirePets();
  }, []
  )

  async function requirePets(){
      const res = await fetch (
          `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
          )

      const json =  await res.json();

      console.log(json);

      setPets(json.pets)
  }

  return (
    <div className="search-params">
      <form>
        <label>
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMAL.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breeds
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <div>
      {
        pets.map((pet) => (
        <Pet
        name= {pet.name}
        animal = {pet.animal}
        breed = {pet.breed}
        key={pet.id}
        />))
      }
      </div>
    </div>
  );
}
