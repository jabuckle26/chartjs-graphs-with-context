import React from 'react';

export const NavBar = () => {
    return (
        <div style={navStyles}>
            <h3 style={navTitle}>Simple React App using chartjs and context hook.</h3>
        </div>
    )
}

const navStyles = {
    heigth: '10vh',
    width: '100vw',
    padding: '1%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#212121',
    color: 'white',
}

const navRight = {
    width: '20%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const navTitle = {
    color: '#dedace'
}

