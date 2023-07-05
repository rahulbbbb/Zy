import React, {useState} from 'react'

const StudentList = () => {
    const [list, setNewList]=useState([])
    const [data, setNewData]=useState({
        name:'',
        age:'',
        rollno:'',
        result:''
    })

    function handleInputValue(e){
       const{name, value}=e.target;
       setNewData((prevData)=>({...prevData, [name]:value}))
    }

    function handleAddList(){
        const newAdd={
            id:Date.now(),
            ...data,
            
        }
        setNewList([...list, newAdd])
        setNewData({
            name:'',
            age:'',
            rollno:'',
            result:''
        })
    }

    function handleDelete(dataId){
       let filteredList=list.filter((data)=>data.id!==dataId)
       setNewList(filteredList)
    }

  return (
    <>
    <input
    type='text'
    name="name"
    onChange={handleInputValue}
    value={data.name}
    />
    <input
    type='number'
    name="age"
    onChange={handleInputValue}
    value={data.age}
    />
    <input
    type='number'
    name="rollno"
    onChange={handleInputValue}
    value={data.rollno}
    />
    <input
    type='text'
    name="result"
    onChange={handleInputValue}
    value={data.result}
    />
    <h1>Name-Age-RollNo-Result</h1>
    <ul>
    {
        list.map((list)=>(
          <li key={list.id} className='list'>
            <div className='item'>{list.name}</div>
            <div className='item'>{list.age}</div>
            <div className='item'>{list.rollno}</div>
            <div className='item'>{list.result}</div>
            
            
            

            <button onClick={()=>handleDelete(list.id)}>Delete</button>
          </li>
        ))
    }
    </ul>

  <button onClick={handleAddList}>Submit</button>
    
    </>
  )
}

export default StudentList