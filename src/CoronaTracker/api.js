import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export async function CoronaData(country){

    let changedCountry = url;

    if (country){
        changedCountry = `${url}/countries/${country}`;
    }
    if (country === 'global'){
        changedCountry = url;
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changedCountry);

        return {confirmed, recovered, deaths, lastUpdate};
    }catch (e) {
        console.log(e);
    }
}

export async function CoronaDaily() {
    try {
        const {data} = await axios.get(`${url}/daily`);

        const modifierData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifierData;
    }catch (e) {
        console.log(e);
    }

}


export async function CoronaCountry(){
    try {
        const { data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);

    }catch (e) {
        console.log(e);
    }
}