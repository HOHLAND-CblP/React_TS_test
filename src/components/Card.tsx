import React, { FC, ReactNode, useState } from "react";

export enum CardVarian {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVarian;
    onClick: (num: number) => void;
    children?: ReactNode;
}

const Card: FC<CardProps> = ({width, height, variant, onClick, children}) => {
    const [state, setState] = useState(0);
    return (
        <div style={{width, height, 
            border: variant === CardVarian.outlined ? '1px solid gray' : 'none',
            background: variant === CardVarian.primary ? 'lightgray' : ''}}
        >
            {children}
        </div>
    );
};

export default Card;