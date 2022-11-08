import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/characters/characters.functions";
import './styles/Characters.scss'

const Characters = () => {
  const dispatch = useDispatch();
  const { characters, isLoading, error } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  return (
    <div className="container">
      {isLoading ? (
        <img
          src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
          alt="caracol"
        />
      ) : (
        !error && characters.map((character) => {
            return (
                <div className="container">
                <div className="characters">
                <div className="card"  key={character.id}>
                    <h3>{character.name}</h3>
                    <div className="img-container">
                    <img src={character.image} alt={character.name}/>
                    </div>
                </div>
                </div>
                </div>
            )
        })
      )}
    </div>
  );
};

export default Characters;
