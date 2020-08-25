import React from 'react';
import "./style.css";
const Brick =(props)=>{
    const myfunc = (event) =>{
      props.WhenClicked(props.name);
    }
    return(
      
        <div onClick={myfunc} 
          className='brick-cont'>
          {props.name}
        </div>
    );
}
export default Brick;