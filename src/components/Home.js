import React from 'react';
import { useGetBusiness } from '../helpers/useGetBusinesses';
import BusinessListComponent from './Business/BusinessListComponent';

export function Home() {

    const [businesses] = useGetBusiness();

    return (
        <div>
            <BusinessListComponent businesses={businesses} />
        </div>
    );
}