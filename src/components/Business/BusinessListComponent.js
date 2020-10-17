import React from 'react';
import BusinessComponent from './BusinessComponent';
import './Business.css';

const BusinessListComponent = (props) => {


    return (
        <div className="main-container">
            {props.businesses.map(b => <BusinessComponent key={b.id} business={b} id={b.id} />)}
        </div>
    );
}

export default BusinessListComponent;