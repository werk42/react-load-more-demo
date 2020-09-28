import React, {FC} from 'react';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import { Starship } from '../../shared/types';


const AppListItem: FC<Starship> = (props) => {
    return(
        <>
            <ListItem 
                key={props.name}>
                <ListItemText 
                    primary={props.name} 
                    secondary={props.model} 
                /> 
            </ListItem>
        </>
    )
}

export default AppListItem;