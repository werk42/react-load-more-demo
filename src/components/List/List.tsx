import React, { useState, useEffect} from 'react';
import axios from 'axios';
import AppListItem from './ListItem';
import AppButton from '../Button/Button';
import { Starship } from '../../shared/types';

const List = () => {
    const [items, setItems] = useState<Starship[]>([]);
    const [nextPage, setNextPage] = useState('');
    const [url, setUrl] = useState('https://swapi.dev/api/starships');

    const getItems = () => {
        axios.get(url).then(
            res => {
                setItems([...items,...res.data.results])
                setNextPage(res.data.next)
            }).catch(error =>
                console.log(error)
        )
    }

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