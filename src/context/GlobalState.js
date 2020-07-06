import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialState = {
    barData: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
        datasets: [
            {
                data: [0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderWidth: 3
            }
        ]
    }
}

//Create context
export const GlobalContext = createContext(initialState);

//Create provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions - these make calls to the reducer
    function updateData(newData) {
        dispatch({
            type: 'UPDATE_DATA',
            payload: newData
        })
    }
    
    return (
    <GlobalContext.Provider value={{
        barData: state.barData,
        updateData
    }}>
        {children}
    </GlobalContext.Provider>)
}