import React from 'react'
import './Buttons.css'



const Buttons = (props:any):JSX.Element => {



    return (
        <div className="navButtons">
            <select className="buttons" onChange={(e)=>{props.setID(e.target.value)}} value={props.cityID}>
                <option></option>
                <option value="2643741">London</option>
                <option value="2637487">Southampton</option>
                <option value="2638853">St.Austell</option>
                <option value="2147714">Sydney</option>
                <option value="6255152">Antarctica</option>
                <option value="2648579">Glasgow</option>
                <option value="3534452">Venegas</option>
            </select>
            <button className="buttons" onClick={() => {props.getReq()}}>Get Weather</button>
           
        </div>
    )
}

export default Buttons


