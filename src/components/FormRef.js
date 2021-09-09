import React,{useRef} from "react";
const FormRef = () => {
    const name = useRef(null);
    const age = useRef(null);

  
    const onSubmitHandler = (event) => {
      event.preventDefault();
      const Data = {
        name: name.current.value,
        age:age.current.value,
      }
      console.log(Data)
      
    };
    return (
      <div>
        <form onSubmit={onSubmitHandler} >
          <div>
            <label>Name:</label>
            <input type="text" ref={name} />
          </div>
          <div>
            <label>Age:</label>
            <input type="number" ref={age} />
          </div>
          
          <button type="submit">Submit</button>
        </form>
     
      </div>
    );
  };
  
  export default FormRef;