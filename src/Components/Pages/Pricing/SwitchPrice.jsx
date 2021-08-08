import React,{ useState} from 'react';
import './Styles/Switch.scss';
import Switch from '@material-ui/core/Switch';
import Card from './Card';
import {FiBox} from 'react-icons/fi';
import { BsBoundingBoxCircles } from 'react-icons/bs';
const SwitchPrice=()=>{
    const [state , setState] = useState(false);
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      function change(){
          setState(!state) ;
      }
      
    return(
        <div className="switch-price">
                 <div className="switch-part">
         <p>Paid Monthly</p>
        <Switch
        className="switchBtn"
        checked={state.checked}
        onChange={change}
        onClick={change}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
        
      />
       <p>Paid Annually</p>
            </div>
            <div className="state-content">
      {state===false && 
       <Card  
        type="Monthly"
      />}
         {state===true && 
         <Card type="Annually"/>}
      </div>
        </div>
    )
};
export default SwitchPrice ;