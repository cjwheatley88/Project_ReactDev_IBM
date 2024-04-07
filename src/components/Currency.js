import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css'

const Currency = () => {
  const {dispatch } = useContext(AppContext);

	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}

    return (
      <div className='currDiv'>
          <label>Currency</label>
            <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#93e499'}}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>	          
      </div>
    );
  };
  
export default Currency;