import React from 'react';
import './style.css'
import Brick from '../brick/brick.js'

class Wall extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bricks:[1,2]
        }
    }
    clickBrick=(bricknum)=>{
        window.alert("Brick clickes"+bricknum);
    }
    addMoreBricks = () =>{
        const n = [...this.state.bricks];
        n.push(n.length +1);
        this.setState({
              bricks:n
        })
    }
    render = () => {
    return(

       <div className='wall-container'>
           {
               this.state.bricks.map((b)=>{
                 return <Brick 
                 key={b} 
                 name={b}
                  WhenClicked = {this.clickBrick}
                 />
               })
           }
        <button className="btn" onClick={this.addMoreBricks} >Add More</button>
       </div>

    );

}


}

export default Wall;