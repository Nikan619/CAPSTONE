
import React from 'react';
import { Context } from "../store/auth-context"
import {useContext} from "react";

const SearchForm=()=>{

    const {setQuery} = useContext(Context);

return (

<div>
<h2>search form component</h2>
</div>


)



}

export default SearchForm;

