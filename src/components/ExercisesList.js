import React from 'react'
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData'

const ExercisesList = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setcurrentPage] = useState(1);
    const exercisesPerPage = 9;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setcurrentPage(value);

        window.scrollTo({top: '1150', behavior: 'smooth'});
    }

  return (
    <>
    <div className='ExercisesList'>
        {currentExercises.map((exercise, index) => (
            <Link style={{textDecoration: 'none'}} key={index} to={`/exercise/${exercise.id}`}>
                <div className='ExerciseCard'>
                    <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'></img>
                    <button>{exercise.bodyPart}</button>
                    <button>{exercise.target}</button>
                    <p>{exercise.name}</p>
                </div>
            </Link>
        ))}
    </div>
    <div className='Pagination'>
    {exercises.length > 9 && (
          <Pagination 
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
    </div>
    </>
  )
}

export default ExercisesList