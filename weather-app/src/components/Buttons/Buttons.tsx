import React from 'react'



const Buttons = (props:any):JSX.Element => {



    return (
        <>
            <select onChange={(e)=>{props.setID(e.target.value)}} value={props.cityID}>
                <option value="2643741">London</option>
                <option value="2637487">Southampton</option>
                <option value="2638853">St.Austell</option>
            </select>
            <button onClick={() => {props.getReq()}}>Get Weather</button>
        </>
    )
}

export default Buttons


