import {createAsyncThunk} from "@reduxjs/toolkit";
import {getRefreshFromStore, getTokenFromStore} from "./helper";
import {dispatch} from "react-hot-toast";

const requestOptions = {
    headers: {'Authorization': getTokenFromStore()},
};

// export const getCurrentUserData = createAsyncThunk(
//     'user/getData',
//     async (id) => {
//         const response = await fetch(`http://127.0.0.1:8000/users/${id}`).then((res) =>
//             res.json()
//         )
//         return response
//     }
//)
export const signupUser = createAsyncThunk(
    'users/signupUser',
    async ({name, username, email, password}, thunkAPI) => {
        try {
            const response = await fetch(
                'http://localhost:8000/users/',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        first_name: name,
                        username: username,
                        email: email,
                        password: password,
                    }),
                }
            );
            let data = await response.json();
            console.log('data', data);

            if (response.status === 201) {
                // localStorage.setItem('token', data.token);
                // localStorage.setItem('refresh', data.refresh);
                return {...data, username: username, email: email};
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    'users/login',
    async ({username, password}, thunkAPI) => {
        try {
            const response = await fetch(
                'http://localhost:8000/api/token/',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                }
            );
            let data = await response.json();

            if (response.status === 200) {
                localStorage.setItem('token', data.access);
                localStorage.setItem('refresh', data.refresh);
                console.log('response', data);
                return data;

            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const getCurrentUserData = createAsyncThunk(
    'User/getDetails',
    async () => {
        const response = await fetch(`http://127.0.0.1:8000/current-customer`, requestOptions).then((res) =>
            res.json()
        )
        return response.results[0]
    }
)


export const updateUserData = createAsyncThunk(
    'User/updateDetails',
    async ({edits}) => {
        const response = await fetch(`http://127.0.0.1:8000/current-user`,
                {
                    method: 'PATCH',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: edits,
                }).then((res) =>
            res.json()
        )
        return response.results[0]
    }
)
export const refreshToken = createAsyncThunk(
    'users/refreshToken',
    async (_, thunkAPI) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'refresh': getRefreshFromStore()})
        };
        const response = await fetch(`http://127.0.0.1:8000/api/token/refresh/`, requestOptions).then((res) =>
            res.json()
        )
        localStorage.setItem('token', response['access']);
        return response
    }
)
export const socialAuth = createAsyncThunk(
    'users/socialAuth',
    async ({code}, thunkAPI) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        "provider": 'google-oauth2',
                        "code": code
                    }
                )
            };
            const response = await fetch(`http://localhost:8000/api/login/social/jwt-pair/`, requestOptions).then((res) =>
                res.json()
            )
            console.log('response', response);
            if (response.status) { // refactor
                localStorage.setItem('token', response['access']);
                localStorage.setItem('refresh', response['refresh']);
                return response;
            } else {
                return thunkAPI.rejectWithValue(response);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
)