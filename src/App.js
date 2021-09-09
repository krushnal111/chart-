// import React,{useState}from 'react'
import './App.css';
import Form2 from './components/Form2';
// import FormRef from './components/FormRef';
// import Chart2 from './components/Chart2';

const App = () => {

  const onSubmit=(event)=>{
    console.log(event)
  }
  // const [fetchData,getSetData]=useState([]);
  // const onSubmit = (e) =>{
  //   getSetData((prevData)=>{
  //     return[...prevData,e]
  //   })
  // }

 return (
    <div>
    <Form2 onSubmit={onSubmit}/>
    {/*<FormRef></FormRef>*/}
    {/*<Form2 onSubmit={onSubmit}  />
    
 <Chart2 fetch={fetchData}/>*/}
    </div>
  );
}

export default App;