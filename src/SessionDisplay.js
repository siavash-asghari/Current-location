import React from 'react';
import './SessionDisplay.css'

const getSession = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    }
    else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const config = {
    summer: {
        text: 'bezan berim sahel!',
        icon: 'sun',
    },
    winter: {
        text: 'waay cheghader sarde',
        icon: 'winter',
    }
}


const SessionDisplay = (props) => {
    const session = getSession(props.lat, new Date().getMonth());
    const {text, icon} = config[session]
    return (
        <div className={`session-display ${session}`}>
            <h3>Session: {session}</h3>
            <h1>
            <i className={ `icon-left massive ${icon} icon` }/>
               <h1>{text}</h1> 
            <i className={ `icon-right massive ${icon} icon` }/>
            </h1>
        </div>
    )
}



export default SessionDisplay;