import React, {FC} from 'react';
import { AppBar } from '@material-ui/core';
import style from './style.module.css';

interface HeaderProps {
    title: string,
}

const Header: FC<HeaderProps> = ({title}) => {
    return(
        <>
        <AppBar position='relative'>
            <h1 className={style.title}>.
                {title}
            </h1>
        </AppBar>
        </>
    )
}

export default Header;