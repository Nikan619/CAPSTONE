
import React from 'react';
import { Context } from "../store/auth-context"
import {useContext, useRef,useState} from "react";

const InputFormNomination=()=>{

    const {nommy,setNommy} = useContext(Context);
const options =["received","updated","confirmed","withdrawn"];




return (
<div>
<div>Selected option:{nommy}</div>
<select value={nommy} onChange={e=>
    setNommy(e.target.value)}>
{options.map(option=> <option key={option} value={option} >{option}</option>)}


    </select>

</div>



)



}

export default InputFormNomination;

