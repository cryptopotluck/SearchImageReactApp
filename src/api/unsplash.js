import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
            Authorization: 'Client-ID 974e1c0d9c5e8a8c513034c1e56a031b471433a779b675ca22bb5c90fafe6305'
        }
});