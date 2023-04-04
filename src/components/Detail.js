import React from 'react'
import { GiConvergenceTarget } from 'react-icons/gi'
import { IoBodyOutline } from 'react-icons/io5'
import { GoHeart } from 'react-icons/go'

const Detail = ({ exerciseDetail }) => {
    // console.log(exerciseDetail)

    const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

    return (
        <div className='DetailWrapper'>
            <img loading='Lazy' src={gifUrl} alt={name} width="360px" height="360px" />
            <div className='AboutExercise'>
                <h1 className='ExerciseTitle'>{name}</h1>
                <p className='ExerciseParagraph'>Exercises keep you strong. {name} is one of the best exercises to target your {target}
                    . It will help you improve your mood and gain energy.</p>
                <div className='taBopaEq'>
                    <span className='DetailsIcon'><GiConvergenceTarget /></span>
                    <p>{target}</p>
                </div>
                <div className='taBopaEq'>
                    <span className='DetailsIcon'><IoBodyOutline /></span>
                    <p>{bodyPart}</p>
                </div>
                <div className='taBopaEq'>
                    <span className='DetailsIcon'><GoHeart /></span>
                    <p>{equipment}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail