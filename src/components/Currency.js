import React, {useState, handleChange} from 'react';

const Currency = () => {
 const [value, setValue] = useState(1);
 const handleChange = (event) => {

   setValue(event.target.value);

 };

 return (

   <div>
     <label>
       Currency
       <select value={value} onChange={handleChange}>
         <option value="1">$ Dollar</option>
         <option value="2">£ Pound</option>
         <option value="3">€ Euro</option>
         <option value="4">₹ Ruppee</option>
       </select>
     </label>
   </div>

 );

};

export default Currency;