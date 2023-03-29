import React from 'react'

const Detail = ({ exerciseDetail }) => {
    // console.log(exerciseDetail)

    const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

    return (
        <div>
            <h1 className='ExerciseTitle'>{name}</h1>
            <img loading='Lazy' src={gifUrl} alt={name} />
            {target}    {bodyPart}  {equipment}
        </div>
    )
}

export default Detail