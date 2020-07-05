import React, { useState, useContext } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';

export const GraphContainer = () => {
    const {barData} = useContext(GlobalContext);
    const [chartReference, setChartReference] = useState();

    const [barOptions, setBarOptions] = useState({
        options: {
            scales: {
                xAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            title: {
                display: true,
                text: 'Data Orgranized In Bars',
                fontSize: 25
            },
            legend: {
                display: true,
                position: 'top'
            }
        }
    });
    
    return (
        <div style={containerHeight}>
            <HorizontalBar data={barData}
            options={barOptions.options}
            ref={chartReference}
            />
        </div>
    )
}

const containerHeight = {
    width: '45%'
}
