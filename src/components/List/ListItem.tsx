import React, {FC} from 'react';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';

interface AppListItemProps {
    name: string,
    model: string,
}

const AppListItem: FC<AppListItemProps> = ({name, model} : AppListItemProps) => {
    return(
        <>
            <ListItem key={name}>
                <ListItemText primary={name} secondary={model} /> 
            </ListItem>
        </>
    )
}

export default AppListItem;