import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlanets } from '../redux/planets/planets.functions';

const Planets = () => {
  const dispatch = useDispatch();
  const {planets, isLoading, error} = useSelector((state) => state.planets);

  
  useEffect(() => {
      dispatch(getPlanets())
  },[])
return (
  <div>
    {isLoading ? (
        <img
          src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
          alt="caracol"
        />
      ) : (
        !error && planets.map((character) => {
            return (
                <div className="planet" key={planets.id}>
                    <h3>{planets.name}</h3>
                    <img src={planets.image} alt={planets.name}/>
                </div>
            )
        })
      )}
  </div>
)
}

export default Planets
