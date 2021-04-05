import axios from 'axios';

const api = axios.create({
    baseURL: 'https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json'
}); 

export default api;