import axios from 'axios';

export default class Api{
    static async services(name){
        return await axios.get(`https://restcountries.com/v3.1/name/${name}`)
    }
}