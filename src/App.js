import React, { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
//Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Alerts from './components/alerts/Alerts';
import Dates from './components/dates/Dates';
import DatesForm from './components/datesForm/DatesForm';

//FontAwesome library
library.add(fab, faTrashAlt, faCheck);
//Number of active alerts
sessionStorage.setItem("numAlerts", 0);

function App() {
    // LocalStorage old dates
    let initDates = localStorage.getItem('dates')? JSON.parse(localStorage.getItem('dates')):[];
    // Dates State
    const [dates, setDates] = useState(initDates);
    // Update localStorage dates
    useEffect( () => {
        localStorage.setItem('dates', JSON.stringify(dates));
    }, [dates]);
    
    // Alerts State
    const [alerts, setAlerts] = useState([]);
    const addAlert = newAlert => {
        let numAlerts = parseInt(sessionStorage.getItem("numAlerts"))+1;
        sessionStorage.setItem("numAlerts", numAlerts);
        newAlert.id = numAlerts;
        setAlerts([...alerts, newAlert]);
    };

    return (
        <Fragment>
            <Header img="/logo.png" name="Patients Dates Manager App" link="https://ehiwebs.com.ve" />
            <div className="container section" id="content">
                <div className="row">
                    <DatesForm dates={dates} setDates={setDates} addAlert={addAlert} />
                    <Dates dates={dates} setDates={setDates} addAlert={addAlert} />
                </div>
            </div>
            <Alerts alerts={alerts} setAlerts={setAlerts} />
            <Footer />
        </Fragment>
    );
}

export default App;
