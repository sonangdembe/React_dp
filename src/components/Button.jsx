import React from 'react'
import PropTypes from 'prop-types'


const Button = (props) => {
   const propsName = props.name
  return (
   <>
    <button>{propsName}</button>
 
   </>
  )
}

// Button.defaultProps = {
//   name : "Default"
// }

Button.propTypes ={
  name : PropTypes.string
}
export default Button