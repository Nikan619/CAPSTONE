import React from 'react';
import { Context } from "../store/auth-context"
import {useContext, useRef,useState} from "react";

const CommitteeInputsearch=()=>{

    const {committ,setCommitt} = useContext(Context);
const options =["house","senate","joint"];




return (
<div>
<div>Selected option:{committ}</div>
<select value={committ} onChange={e=>
    setCommitt(e.target.value)}>
{options.map(option=> <option key={option} value={option} >{option}</option>)}


    </select>

</div>



)



}

export default CommitteeInputsearch;