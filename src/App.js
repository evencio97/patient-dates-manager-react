import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus, faTrashAlt, faShoppingCart, faTimesCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
//Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Alerts from './components/alerts/Alerts';
import Dates from './components/dates/Dates';
import DatesForm from './components/datesForm/DatesForm';

//FontAwesome library
library.add(fab, faCartPlus, faTrashAlt, faShoppingCart, faTimesCircle, faCheck);
//Number of active alerts
window.sessionStorage.setItem("numAlerts", 0);

function App() {
    // Dates
    const [dates, setDates] = useState([]);
    // Alerts
    const [alerts, setAlerts] = useState([]);
    const addAlert = newAlert => {
        let numAlerts = parseInt(window.sessionStorage.getItem("numAlerts"))+1;
        window.sessionStorage.setItem("numAlerts", numAlerts);
        newAlert.id = numAlerts;
        setAlerts([...alerts, newAlert]);
    };
    
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Header img="/logo.png" name="Patients Dates Manager App" link="https://ehiwebs.com.ve" />
            <div className="container section" id="content">
                <div className="row">
                    <DatesForm title="Add Date" columns="col-6" dates={dates} 
                        setDates={setDates} addAlert={addAlert} />
                    <Dates title="Dates List" columns="col-6" titles={['Date', 'Time', 'CI', 'Name', 'Delete']} 
                        dates={dates} setDates={setDates} addAlert={addAlert} />
                </div>
            </div>
            <Alerts alerts={alerts} setAlerts={setAlerts} />
            <Footer year={year} />
        </Fragment>
    );
}

export default App;
