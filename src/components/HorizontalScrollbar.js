import React, { useRef } from 'react'
import { CgGym } from 'react-icons/cg'
import { BsArrowLeft, BsArrowRight} from 'react-icons/bs'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {

  const ref = useRef(null);
  const scroll = (scrollOffset) =>{
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
    <div ref={ref} className='bodyParts'>
        {data.map((item) => (
            <div className='bodyPart'
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
                sx={
                  bodyPart === item ? {
                    borderTop: '4px solid #ff2625',
                    backgroundColor: '#fff'
                } : ''
              }
            >   <CgGym id='bodyIcon'/>
                {item} {bodyPart} {setBodyPart}
            </div>
        )
        )}
    </div>
    <div className='HorizontalScrollButtons'>
      <BsArrowLeft onClick={() => scroll(-200)} id='arrow'/>
      <BsArrowRight onClick={() => scroll(200)} id='arrow' />
    </div>
    </>
  )
}

export default HorizontalScrollbar