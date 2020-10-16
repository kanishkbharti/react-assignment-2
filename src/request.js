import { API, BEARER_TOKEN } from './api';
import queryString from 'query-string'

export function get(queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API}/businesses/search${query}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true
        }
    });
}