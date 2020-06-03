import {CoronaDaily} from '../api';
import React, {useEffect, useState} from "react";
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

export default function Charts({data: {recovered, confirmed, deaths}, country}) {

    const [daily, setDaily] = useState([]);

    useEffect(()=>{
       const fetchDaily = async () =>{
           setDaily(await CoronaDaily());
       }
       fetchDaily();
    },[setDaily]);

    const lineCharts = (
        daily.length
        ? (
            <Line
            data={{
                labels: daily.map(({date})=> date),
                datasets: [{
                    data: daily.map(({confirmed}) => confirmed),
                    label: 'Infectados',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: daily.map(({deaths}) => deaths),
                    label: 'Mortes',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
            />) : null
    );


    const barChart = (
        confirmed
        ?(
        <Bar
        data={{
            labels: ['Infectados', 'Recuperados', 'Mortos'],
            datasets: [{
               label: 'People',
                backgroundColor: [
                    'rgba(0, 0, 255, 0.5)',
                    'rgba(0, 255, 0, 0.5)',
                    'rgba(255, 0, 0, 0.5)',
                ],
                data: [confirmed.value, recovered.value, deaths.value],
            }],

        }}
        options={{
            legend: { display: false },
            title: { display: true, text: 'País Atual é ' + country }
        }}
        />): null
    );


    return(
        <div className={styles.container}>
            {country ? barChart : lineCharts}
        </div>
    )

}
