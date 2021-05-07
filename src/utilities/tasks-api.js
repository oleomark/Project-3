import {getToken} from './users-service';
const BASE_URL = '/api/tasks';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(task) {
    const token = getToken();
    return fetch (BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json',
        "Authorization": `Bearer ${token}`, },
        body: JSON.stringify(task)
    }).then(res => {res.json()
        console.log(res)
    });
}

export function update(task) {
    const token = getToken();
    return fetch (`${BASE_URL}/${task._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json',
        "Authorization": `Bearer ${token}`, },
        body: JSON.stringify(task)
    }).then(res => res.json());
}

export function deleteOne(id) {
    const token = getToken();
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json',
        "Authorization": `Bearer ${token}`, },
    }).then(res => res.json ());
}