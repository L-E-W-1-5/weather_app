import React from 'react'
import './Buttons.css'

type ButtonProps = {
    setID: Function
    getReq: () => void
    cityID: string | undefined
}

const Buttons = (props:ButtonProps):JSX.Element => {



    return (
        <div className="navButtons">
            <select className="buttons" onChange={(e)=>{props.setID(e.target.value)}} value={props.cityID}>
                <option></option>
                <option value="2643741" onClick={() => {props.getReq()}}>London</option>
                <option value="2637487" onClick={() => {props.getReq()}}>Southampton</option>
                <option value="2638853" onClick={() => {props.getReq()}}>St.Austell</option>
                <option value="2147714" onClick={() => {props.getReq()}}>Sydney</option>
                <option value="6255152" onClick={() => {props.getReq()}}>Antarctica</option>
                <option value="2648579" onClick={() => {props.getReq()}}>Glasgow</option>
                <option value="3534452" onClick={() => {props.getReq()}}>Venegas</option>
            </select>
            <button className="buttons" onClick={() => {props.getReq()}}>Get Weather</button>
           
        </div>
    )
}

export default Buttons


