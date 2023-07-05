import React, {useState} from 'react'

const ToDoList = () => {
    const [value, setValue]=useState('')
    const [list, setList]=useState([])

    const handleInputChange=(e)=>{
        setValue(e.target.value)
    }
    const handleAddList=()=>{
        const newList={
            id:Date.now(),
            title:value,
            completed:false,
        }
        setList([...list, newList])
        setValue('')
    }

    const handleDelete=(taskId)=>{
      const filteredList=list.filter((list)=>list.id!==taskId)
      setList(filteredList)
      
    }
const handleListCompleted=(taskId)=>{
    const updateList=list.map((list)=>
        list.id=taskId ? {...list, completed: !list.completed}: list
    )
    setList(updateList)
   
}

  return (
   <>
   <h1>To Do List</h1>
   <input
   type='text'
   value={value}
   onChange={handleInputChange}/>
   <ul>
    {list.map((list)=>(
        <li key={list.id}>
            <input type='checkbox' checked={list.completed} onChange={()=>handleListCompleted(list.id)}/>
            {list.title}
            <button onClick={()=>handleDelete(list.id)}>Delete</button>
        </li>
    )

    )}
   </ul>
   <button onClick={handleAddList}>Add</button>
   </>
  )
}

export default ToDoList