import React from 'react'

const Header = ({title}) => {
    
  return (
    <header >{title}</header>
  )
}

Header.defaultProps = {
    title:"TODO"
}
export default Header