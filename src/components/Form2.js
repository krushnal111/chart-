import React,{useState} from 'react'

function Form2({onSubmit}) {
    const [fetchData,setFetchData]=useState([])
    const[name,setName]=useState([])
    const[number,setNumber]=useState([])
 

const getName=(event)=>{
    setName(event.target.value)
}

const getNumber=(event)=>{
    setNumber(event.target.value)
}

const addData = (event)=>{
    event.preventDefault()
    const obj={
        name:name,
        number:number,
    }
 
    setFetchData(prevData=>[...prevData,obj])
    onSubmit(obj)  
    // fData(obj); 
    document.myForm.reset()
    setName('')
    setNumber('')

  }

return (
    
    <div>
    <form  name="myForm"  onSubmit={addData}>
    <div>
    <label>Name</label>
    <input type="text" onChange={getName}></input>
    </div>
    <div>
    <label>Number</label>
    <input type="number" onChange={getNumber}></input>
    </div>
    <button>Add</button>
    </form>
    
    {fetchData.map((data,index)=>(
        <div key={index}>
        <div>{data.name}</div>
        <div>{data.number}</div>
        </div>
    ))}

    
    
        
    </div>
)
}

export default Form2
// import React, { useState } from "react";

// function Form2() {
//   const [setData, setDataHandler] = useState([]);
//   const [fetchData,setFetchData]=useState([])
//   const onData = (e) => {
//     e.preventDefault();
//     setFetchData((prevData) => [...prevData, setData]);
//     // setDataHandler("");
//     // document.myForm.reset("");
//   };
//   return (
//     <div>
//       <form name="myForm" onSubmit={onData}>
//         <label>Name</label>
//         <input
//           type="text"
//           value={setData["name"]}
//           onChange={(e) => setDataHandler({ ...setData, name: e.target.value })}

//     ></input>
//     <label>Number</label>
//     <input
//       type="number"
//       value={setData["number"]}
//       onChange={(e) =>
//         setDataHandler({ ...setData, number: e.target.value })
//       }
//     ></input>
//     <button>Add</button>
//   </form>
//   {fetchData.map((data,index) => (
//     <div key={index}>
//       <div>{data.name}</div>
//       <div>{data.number}</div>
//     </div>
//   ))}
// </div>
//   );
// }

// export default Form2;