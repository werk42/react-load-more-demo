import React, { useState, useEffect} from 'react';
import axios from 'axios';
import AppListItem from './ListItem';
import AppButton from '../Button/Button';
import { Starship } from '../../interfaces/Starship';
import { fetchApi } from '../../shared/apiCalls'; 

const List = () => {
    const [items, setItems] = useState<Starship[]>([]);
    const [nextPage, setNextPage] = useState('');
    const [url, setUrl] = useState('https://swapi.dev/api/starships');

    const getItems = async () => {
        await fetchApi(url).then((response: any) => {
            console.log('response', response);
            setItems([...items, ...response.results])
            setNextPage(response.next)
        }
    )}

    useEffect(() => {getItems()}, [url])

    const loadMore = () => {
        setUrl(nextPage)
    }

    return(
        <>
        {items.map((i) => 
            <AppListItem 
                key={i.name} 
                name={i.name} 
                model={i.model}
            />)}
        {nextPage === null  ? null : 
            <AppButton 
                onClick={loadMore} 
                title={'Load more'} 
            />}
        </>
    )
}

export default List;