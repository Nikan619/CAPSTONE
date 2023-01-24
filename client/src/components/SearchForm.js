
import React from 'react';
import { Context } from "../store/auth-context"
import {useContext, useRef,useState} from "react";

const SearchForm=()=>{

    const {setQuery} = useContext(Context);
const searchValue =React.useRef('');

React.useEffect(()=>{
    searchValue.current.focus();
},[])

const searchStatement= () =>{
 
    setQuery(searchValue.currentValue);
}

const handleSubmit = (e)=>{e.preventDefault();}

return (

<section className='section search'>
    <form className="search-form" onSubmit={handleSubmit}>
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

