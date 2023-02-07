import React, { useState } from 'react'
import { fetchData, exerciseOptions } from '../utils/fetchData'

const ExerciseDetail = () => {

  const SearchExercises = () => {
    const [search, setSearch] = useState('');

    const handleSearch = async () => {
      if (search) {
        const exerciseData = await fetchData('https://exerciseapi3.p.rapidapi.com/search/muscles/', exerciseOptions);
      }
      console.log(SearchExercises())
    }
  }

  return (
    <div className='ExerciseDetailWrapper'>
      <h1 onClick={SearchExercises}>Clickme</h1>
    </div>
  )
}

export default ExerciseDetail