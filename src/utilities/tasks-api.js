const BASE_URL = '/api/tasks';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(task) {
    return fetch (BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(task)
    }).then(res => res.json());
}

export function update(task) {
    return fetch (`${BASE_URL}/${task._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(task)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json ());
}