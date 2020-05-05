import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus, faTrashAlt, faShoppingCart, faTimesCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
//Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Alerts from './components/alerts/Alerts';

//FontAwesome library
library.add(fab, faCartPlus, faTrashAlt, faShoppingCart, faTimesCircle, faCheck);
//Number of active alerts
window.sessionStorage.setItem("numAlerts", 0);

function App() {
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
            <Header img="/logo.png" name="EHI Webs Solutions" link="https://ehiwebs.com.ve" />
            <div id="content">
                {/* <Products
                    titles={['ID', 'Name', 'Price', 'Action']} products={products}
                    cartProducts={cartProducts} setCartProducts={setCartProducts}
                    addAlert={addAlert} /> */}
            </div>
            <Alerts alerts={alerts} setAlerts={setAlerts} />
            <Footer year={year} />
        </Fragment>
    );
}

export default App;
