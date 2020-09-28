import React, { useState, useEffect, useCallback} from 'react';
import AppListItem from './ListItem';
import AppButton from '../Button/Button';
import { Starship } from '../../interfaces/Starship';
import { fetchStarships } from '../../shared/apiCalls'; 

const List = () => {
    const [items, setItems] = useState<Starship[]>([]);
    const [nextPage, setNextPage] = useState('');
    const [url, setUrl] = useState('https://swapi.dev/api/starships');

    const getItems = useCallback(async () => {
        await fetchStarships(url).then((response) => {
            setItems((currentItems) => {
                return [...currentItems, ...response.results]
            })
            setNextPage(response.next)
        }
    )}, [url]);

    useEffect(() => {getItems()}, [getItems])

    const loadMore = useCallback(() => {
        if (!nextPage) {
            return;
        }

        setUrl(nextPage)
    }, [nextPage]);

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