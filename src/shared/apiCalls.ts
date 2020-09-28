import axios from 'axios';
import { Starship } from '../interfaces/Starship';

export interface StarshipsResponse {
    results: Starship[];
    next: string;
}

export const fetchStarships = async (url: string): Promise<StarshipsResponse> => {
    const results = await axios.get<StarshipsResponse>(url);
    return results.data;
}

