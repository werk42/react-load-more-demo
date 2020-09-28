import axios from 'axios';
import { Starship } from '../interfaces/Starship';

export const fetchApi = async (url: string) : Promise<Starship[] | {error: string}> => {
    try{
        const results = await axios.get(url);
        return results.data;
    } catch (error){
        return {error}
    }
}

