import React from 'react';
import { useGetBusinesses } from '../helpers/useGetBusinesses';
import BusinessListComponent from './Business/BusinessListComponent';

export function Home() {

    const [businesses] = useGetBusinesses();

    return (
        <div>
            <BusinessListComponent businesses={businesses} />
        </div>
    );
}