import React, {FC} from 'react';
import Button from '@material-ui/core/Button';

interface ButtonProps {
    title: string;
    onClick: () => void;
}

const AppButton: FC<ButtonProps> = ({onClick, title }) => {
    return(
        <>
            <Button 
                onClick={onClick}
                variant='outlined'
                color='primary'
                style={{ margin: '10px'}}
            >
                {title}
            </Button>
        </>
    )
}

export default AppButton;