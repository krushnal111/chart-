import React,{useState} from 'react'
import Chart2 from './Chart2'

function Form() {
    const [setData,setDataHandler]=useState([]  )
    const[fetchData,setFetchData]=useState([])
    const setName=(e)=>{
        setDataHandler({ ...setData, name: e.target.value })
      }
      const setNumber=(e)=>{
        setDataHandler({ ...setData, number: e.target.value })
      }
    const submitData=(event)=>{
        event.preventDefault()
        setFetchData(fetchData=>[...fetchData,setData])
        console.log(fetchData+"Hello")
        setDataHandler('')
        document.myForm.reset()

    }
    return (
        <div>
            <div>
            <form name="myForm"  onSubmit={submitData}>
            <div>
            <label>Name : </label>
            <input type="text" value={setData.name} onChange={setName}></input>
            </div>
            <div>
            <label>Number : </label>
            <input type="number"  value={setData.number}  onChange={setNumber}></input>
            </div>
            <button >Add</button>
            </form>

        

            { fetchData.map((data,index)=>(
                <div key={index}>
                <div>{`Name is : ${data.name}`}</div>
                <div>{`Number is : ${data.number}`}</div>
                </div>
                ))}
                <Chart2 data={fetchData}></Chart2>

        
                </div>
        </div>
    )
}

export default Form
