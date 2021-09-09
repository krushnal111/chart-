
import React from 'react'

const Dropdown = ({onData}) => {


return (
    <div>
    <select onChange={e=>onData(e.target.value)} >
    <option></option>
    <option value="Bar">Bar</option>
    <option value="Pie">Pie</option>
    </select>
        
    </div>
)
}
export default Dropdown