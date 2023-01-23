
import React from 'react';
import { Context } from "../store/auth-context"
import {useContext, useRef} from "react";

const SearchForm=()=>{

    const {setQuery} = useContext(Context);
const searchValue= React.useRef('');

const searchStatement= () =>{
    console.log(searchValue.currentValue);
    setQuery(searchValue.current.value)
}

return (

<section className='section search'>
    <form action="">
        <div className="form-control">
            <label htmlFor="name">search your statement</label>
            <input type="text" id="statement" ref={searchValue} onChange={searchStatement}/>
        </div>
    </form>

<h2>search form component</h2>
</section>


)



}

export default SearchForm;

