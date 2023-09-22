import React from 'react'

import LineItem from './LineItem';

const ListItems = ({items,handleChange,handleClick}) => {
  return (
    <div>
        
        <ul>
             {items.map((n)=>(
                 <LineItem n={n}
                 key={n.id}
                 handleChange={handleChange}
                 handleClick={handleClick}></LineItem>
 
             ))}
            
         </ul>
    </div>
  )
}

export default ListItems