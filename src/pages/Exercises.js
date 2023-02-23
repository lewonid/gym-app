import React, { useState, useEffect } from 'react'
import HorizontalScrollbar from '../components/HorizontalScrollbar';
import { fetchData, exerciseOptions } from '../utils/fetchData'

const Exercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      // const bodyPartsData = await fetchData('https://some-random-api.ml/animal/cat', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])

  const handleBodyPart = (bodyPart) => {
    setBodyPart(bodyPart);
  };
  const handleSearch = async () => {
    if (search) {
      // const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const exercisesData = await fetchData('https://some-random-api.ml/animal/cat', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(searchedExercises);
    };
  }

  return (
    <div className='ExercisesWrapper'>
      <div className="CommonContainer Exercises">
        <div className='ExercisesText'>
          <div className='h-line'></div>
          <h1>Find your favorite exercises</h1>
          <p>Here you can find the most important exercises from our gym.<br></br>Regular physical activity can improve your muscle strength and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.
          </p>
          <p>Remember to check with your doctor before starting a new exercise program, especially if you have any concerns about your fitness, haven't exercised for a long time, have chronic health problems, such as heart disease, diabetes or arthritis.</p>
          <p>Train better untill you are the best!</p>
          <p>Train better and be the best version of yourself!</p>
        </div>
        <div className="CommonHero ExercisesHeroBg"></div>
      </div>
      <div className='ExercisesContent'>
        <form id='form'>
          <input
            type="text"
            value={search}
            placeholder="Search Exercises"
            onChange={e => setSearch(e.target.value.toLowerCase())}
          />
          <button onClick={handleSearch} type='button'>
            Search
          </button>
        </form>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </div>
    </div>
  )
}

export default Exercises