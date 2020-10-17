import { API, BEARER_TOKEN } from './api';
import queryString from 'query-string'

export function get(url, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API}${url}?${query}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true
        }
    });
}