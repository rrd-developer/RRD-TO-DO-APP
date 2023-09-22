
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react'
import AddItem from "./AddItem";





function App() {

  const [items,setItems] = useState(
   JSON.parse(localStorage.getItem("todo_list"))
)

const [newItem,setNewItem] = useState('')

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log("Submitted")
  if(!newItem) return 
  console.log(newItem)
  addItem(newItem)
  setNewItem('')
}


const addItem = (item)=>{
  const id = items.length ? items[items.length -1].id + 1  : 1
  const addNewItem = {id,checked:false,item}
  const  listItems = [...items,addNewItem]
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
}

const handleChange = (id)=>{
   const listItems = items.map((item)=>item.id===id ? {...item,checked:!item.checked}:item)
   setItems(listItems)
   localStorage.setItem("todo_list",JSON.stringify(listItems))
}


const handleClick = (id)=>{
    const listItems = items.filter((p)=>p.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}
 
  
  return (
    <div className="App">
      <Header title="RRD TODO-LIST"/>
      <AddItem
         newItem = {newItem}
         setNewItem = {setNewItem}
         handleSubmit = {handleSubmit}
      />
      <Content
        items = {items}
        
        handleChange = {handleChange}
        handleClick = {handleClick}
      
      />
      <Footer length={items.length}/>
      

      
     
    </div>
  );
}

export default App;
