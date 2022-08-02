import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

const Rating = ({rating,text,color}) => {
  return (
    <div >
    <span style={{color}}>       
        <i className={rating>=1? 'fa-solid fa-star' : rating>=0.5? "fa-solid fa-star-half" : ""} />
    </span>
    <span style={{color}}>       
        <i className={rating>=2? 'fa-solid fa-star' : rating>=1.5? "fa-solid fa-star-half" : ""} />
    </span>
    <span style={{color}}>       
        <i className={rating>=3? 'fa-solid fa-star' : rating>=2.5? "fa-solid fa-star-half" : ""} />
    </span>
    <span style={{color}}>       
        <i className={rating>=4? 'fa-solid fa-star' : rating>=3.5? "fa-solid fa-star-half" : ""} />
    </span>
    <span style={{color}}>       
        <i className={rating>=5? 'fa-solid fa-star' : rating>=4.5? "fa-solid fa-star-half" : ""} />
    </span>
    <span > { text & text} Reviews</span>
    </div>
  )
}

Rating.defaultProps = {
    color: '#f8e825'
};

// Rating.propTypes={
//     rating : PropTypes.number.isRequired,
//     text: propTypes.string.isRequired,
//     color: propTypes.string
// }

export default Rating