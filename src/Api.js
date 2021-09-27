import AsyncStorage from '@react-native-community/async-storage';
import { add } from 'react-native-reanimated';

const apiBarber = 'https://api.b7web.com.br/devbarber/api';
const baseApiURL = 'https://helplacapi20210802192824.azurewebsites.net/api'

// export default {
//     checkToken: async (token) => {
//         //var url = `${apiBarber}/refresh`;
//         var url = `${apiBarber}/auth/refresh`;

//         const req = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ token })
//         });
//         const json = await req.json();
//         return json;
//     },
//     signIn: async (email, password) => {
//         // var url = `${baseApiURL}/user/login`;
//         var url = `${apiBarber}/auth/login`;

//         const req = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email, password })
//         });
//         const json = await req.json();
//         return json;
//     },
//     signUp: async (name, email, password) => {
//         //var url = `${baseApiURL}/user/register`;
//         var url = `${apiBarber}/user`;

//         const req = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ Username: name, email, password })
//         });
//         const json = await req.json();
//         return json;
//     },
//     logout: async () => {
//         const token = await AsyncStorage.getItem('token');

//         const req = await fetch(`${apiBarber}/auth/logout`, {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ token })
//         });
//         const json = await req.json();
//         return json;
//     },
export default {
    checkToken: async (token) => {
        var url = `${baseApiURL}/user/refresh`;

        const req = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        const json = await req.json();
        return json;
    },
    signIn: async (email, password) => {
        var url = `${baseApiURL}/user/login`;

        const req = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const json = await req.json();
        return json;
    },
    signUp: async (name, email, password) => {
        var url = `${baseApiURL}/user/register`;

        const req = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Username: name, email, password })
        });
        const json = await req.json();
        return json;
    },
    logout: async () => {
        return null;
        // const token = await AsyncStorage.getItem('token');

        // const req = await fetch(`${apiBarber}/auth/logout`, {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ token })
        // });
        // const json = await req.json();
        // return json;
    },
    getBarbers: async (lat = null, lng = null, address = null) => {
        return null;
        // const token = await AsyncStorage.getItem('token');

        // console.log("LAT", lat);
        // console.log("LNG", lng);
        // console.log("ADDRESS", address);

        // const req = await fetch(`${apiBarber}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
        // const json = await req.json();
        // return json;
    },
    getBarber: async (id) => {
        return null;
        // const token = await AsyncStorage.getItem('token');

        // const req = await fetch(`${apiBarber}/barber/${id}?token=${token}`);
        // const json = await req.json();
        // return json;
    },
    getProducts: async () => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${baseApiURL}/product`);
        const json = await req.json();

        return json;
    },
    getProduct: async (id) => {
        const req = await fetch(`${baseApiURL}/product/${id}`);
        const json = await req.json();
        return json;
    },
    getComments: async (productId) => {
        const req = await fetch(`${baseApiURL}/comment?productId=${productId}`);
        const json = await req.json();
        return json;
    },
    postComment: async (productId, commendId, commentDescription) => {
        const token = await AsyncStorage.getItem('token');
        const body = JSON.stringify({ productId, replyCommentId: commendId, description: commentDescription });

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
            body: body
        };

        const req = await fetch(`${baseApiURL}/comment`, requestOptions);

        return req.ok;
    }
};