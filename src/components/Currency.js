import React, {useState, handleChange} from 'react';
import './Currency.css';

const Currency = () => {
 const [value, setValue] = useState("$ Dollar");
 const handleChange = (event) => {

   setValue(event.target.value);

 };

 return (

   <div className='currDiv'>
     <label>Currency {value}</label>
       <select className='currSel' value={value} onChange={handleChange}>
         <option value="$ Dollar">$ Dollar</option>
         <option value="£ Pound">£ Pound</option>
         <option value="€ Euro">€ Euro</option>
         <option value="₹ Ruppee">₹ Ruppee</option>
       </select>
   </div>

 );

};

export default Currency;