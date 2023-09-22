import React from 'react'
import { FaTrash } from 'react-icons/fa';

const LineItem = ({n,handleChange,handleClick}) => {
  return (
    
    <div>
         <li className='item' >
                  <input
                  type='checkbox'
                  checked = {n.checked}
                  onChange={()=>handleChange(n.id)}
  
                  />
                  <label>{n.item}</label>
                  <FaTrash
                  role='button'
                  tabIndex="0"
                  onClick={()=>handleClick(n.id)}
                  />
              </li>
    </div>
  )
}

export default LineItem