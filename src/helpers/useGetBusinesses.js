import React, { useEffect, useState } from 'react'
import * as api from "./request"

export const useGetBusinesses = () => {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        setBusinesses([]);
        const getData = async () => {
            try {
                const response = await api.get('/businesses/search', { term: "icecreams", location: "redwoodcity", sort_by: 'rating', limit: 10 });
                const data = await response.json();
                setBusinesses(data.businesses);
            } catch (e) {
                console.error(e);
            }
        };
        getData();
    }, []);

    console.log(businesses);
    return [businesses];
}

