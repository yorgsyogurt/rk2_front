import React from 'react';
import axios from "axios";

export function login(username, password) {
    const options = {
        method: 'POST',
        url: 'http://localhost:8080/user/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: { username, password }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        // console.error(error);

    });
}