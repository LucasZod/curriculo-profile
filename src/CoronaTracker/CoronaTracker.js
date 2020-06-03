import React from "react";
import Cards from "./Cards/Cards";
import Charts from "./Chart/Chart";
import {CountryPicker} from "./CountryPicker/CountryPicker";
import {CoronaData} from './api'
import styles from './Corona.module.css';

class AppCorona extends React.Component{
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchData = await CoronaData();

        this.setState({data: fetchData});
    }

        handleCountryChange = async (country) =>{
        const fetchData = await CoronaData(country);

            this.setState({data: fetchData, country: country});
        }


    render() {

        const {data, country} = this.state;

        return(
            <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Charts data={data} country={country}/>
            </div>
        )
    }

}

export default AppCorona;