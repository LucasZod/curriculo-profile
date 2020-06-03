import React, {useEffect, useState} from "react";
import { CoronaCountry } from "../api";
import { FormControl, NativeSelect } from '@material-ui/core';
import style from './ContryPicker.modules.css';

export function CountryPicker( {handleCountryChange} ) {

    const [countries, setCountries] = useState([]);
    
    
    useEffect(()=>{
        async function fetchCountries() {
            setCountries(await CoronaCountry());
        }
        fetchCountries();

    },[setCountries])


    return(
        <div><h1>Selecionar País</h1>
            <FormControl className={style.FormControl}>
                <NativeSelect onChange={e => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {countries.map((countri, index)=> <option key={index} value={countri}>{countri}</option>)}
                </NativeSelect>
            </FormControl>

        </div>
    );
}