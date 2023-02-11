import React from 'react'

const HorizontalScrollbar = ({ data }) => {
  return (
    <div>
        {data.map((item) => (
            <div className='bodyPart'
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
            >
                {item}
            </div>
        )
        )}
    </div>
  )
}

export default HorizontalScrollbar