import React from 'react'

const Footer = ({length}) => {
    
  return (
    <footer> <p>LIST {length === 1 ? "ITEM":"ITEMS"} {length}</p></footer>
   
  )
}

export default Footer