import React from 'react'



const Buttons = (props:any):JSX.Element => {



    return (
        <>
            <select onChange={(e)=>{props.setID(e.target.value)}} value={props.cityID}>
                <option>location1</option>
                <option>location2</option>
            </select>
            <button onClick={() => {props.getReq()}}>Get Weather</button>
        </>
    )
}

export default Buttons


