import React from 'react';
import BusinessComponent from './BusinessComponent';

const BusinessListComponent = (props) => {
    let searchResults = "Loading....";
    if (props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(b => <BusinessComponent key={b.id} business={b} id={b.id} />);
    }

    return (
        <div className="main-container">
            {searchResults}
        </div>
    );
}

export default BusinessListComponent;