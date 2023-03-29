import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);
            // console.log(exerciseDetailData);
        }

        fetchExercisesData();
    }, [id]);


    return (
        <div className='ExerciseDetailWrapper'>
            IN WORK.
            <Detail exerciseDetail={exerciseDetail} />
            <SimilarExercises />
        </div>
    )
}

export default ExerciseDetail