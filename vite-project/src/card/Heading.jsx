import React from 'react'

const Heading = (props) => {
    console.log(props)
  return (
    <h1>{props.title}</h1>
  )
}

export default Heading