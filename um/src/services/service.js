import axios from 'axios';


const baseUrl = "https://api.escuelajs.co/api/v1";

export const getAllUSers = async () => {
    try {
        const response = await axios.get(`${baseUrl}/users`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const getUserDetails = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/users/${id}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const CreateUser = async (a, b, c, d) => {
    try {
        const response = await axios.post(`${baseUrl}/users`, {
            name: a,
            email: b,
            password: c,
            avatar: d
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const UpdateUserData = async (id, email, name) => {
    try {
        const response = await axios.put(`${baseUrl}/users/${id}`, {
            email: email,
            name: name
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}