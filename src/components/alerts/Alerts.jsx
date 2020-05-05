import React from 'react';
import './Alerts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Alerts({ alerts, setAlerts }) {
    // { id: , class: '', type: '', message: '' }
    
    const closeAlert = id => {
        document.getElementById("ale-"+id).style.display = "none";
        setAlerts(alerts.filter(alert => alert.id !== id));
    };

    if (!alerts.length) return (null);
    
    return (
        <div className="alertsColumn">
            {alerts.map(alert => (
                <div key={"ale-"+alert.id} id={"ale-"+alert.id} className={"alert alert-dismissible fade show " + (alert.class ? alert.class : 'alert-danger')} role="alert" onClick={() => closeAlert(alert.id)}>
                    <strong>{alert.type ? alert.type + '! ' : ''}</strong>{alert.message}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <FontAwesomeIcon icon="times-circle" />
                    </button>
                </div>    
            ))}
        </div>
    );
};

export default Alerts;
