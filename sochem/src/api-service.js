export default class API {
    static loginUser(body) {
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            }).then( resp => resp.json())
    }

    static registerUser(body) {
        return fetch(`http://127.0.0.1:8000/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            }).then( resp => resp.json())
    }

    static getEvents(token) {
        return fetch(`http://127.0.0.1:8000/api/events/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`,
            }
            }).then( resp => resp.json())
    }

    static newComment(body, token){
        console.log(token['token']);
        return fetch('http://127.0.0.1:8000/api/forum-comment/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['token']}`,
            },
            body: JSON.stringify(body)
            }).then( resp => resp.json())
    }
}