
import React from 'react';
import { Context } from "../store/auth-context"
import {useContext, useRef,useState} from "react";

const SearchForm=()=>{

    const {setQuery} = useContext(Context);
const [searchValue,setSearchValue]= useState('');

const searchStatement= () =>{
  
    setQuery(searchValue)
}

return (

<section className='section search'>
    <form action="">
        <div className="form-control">
            <label htmlFor="name">search your statement</label>
            <input type="text" id="statement" value={searchValue} onChange={searchStatement}/>
        </div>
    </form>

<h2>search form component</h2>
</section>


)



}

export default SearchForm;

