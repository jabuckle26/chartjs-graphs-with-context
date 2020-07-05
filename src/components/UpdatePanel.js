import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const UpdatePanel = () => {
    const {updateData} = useContext(GlobalContext);

    const [dataPoint1, setDataPoint1] = useState(0); 
    const [dataPoint2, setDataPoint2] = useState(0); 
    const [dataPoint3, setDataPoint3] = useState(0); 
    const [dataPoint4, setDataPoint4] = useState(0); 

    return (
        <div style={updateContainer}>
            <h3>Enter data to plot:</h3>
            <form>
                <div style={formItem}>
                    <label htmlFor="text">Label 1:</label>
                    <input style={formInput} type="number" value={dataPoint1} onChange={(e) => setDataPoint1(Number(e.target.value))} placeholder="Enter data..."></input>
                </div>
                <div style={formItem}>
                    <label htmlFor="text">Label 2:</label>
                    <input style={formInput} type="number" value={dataPoint2} onChange={(e) => setDataPoint2(Number(e.target.value))} placeholder="Enter data..."></input>
                </div>
                <div style={formItem}>
                    <label htmlFor="text">Label 3:</label>
                    <input style={formInput} type="number" value={dataPoint3} onChange={(e) => setDataPoint3(Number(e.target.value))} placeholder="Enter data..."></input>
                </div>
                <div style={formItem}>
                    <label htmlFor="text">Label 4:</label>
                    <input style={formInput} type="number" value={dataPoint4} onChange={(e) => setDataPoint4(Number(e.target.value))} placeholder="Enter data..."></input>
                </div>
            </form>
                <button onClick={() => updateData([dataPoint1, dataPoint2, dataPoint3, dataPoint4])}>PLOT DATA!!</button>
        </div>
    )
}

const updateContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
}

const formItem = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '15px 0'
}

const formInput = {
    marginLeft: '5px'
}
