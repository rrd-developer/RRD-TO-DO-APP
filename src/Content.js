import React from 'react'
import ListItems from './ListItems';


const Content = ({items,handleChange,handleClick}) => {
   
  return (
    <main >
        {items.length? (
            
            <ListItems items={items}
            handleChange={handleChange}
            handleClick={handleClick}/>

        ):(<p>YOUR LIST IS EMPTY</p>)}
       
    
    </main>
  )
}

export default Content