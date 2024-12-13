import React from 'react';

type ButtonProps = {
    text: string,
    onClickFunction?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClickFunction }) => {
    return (
        <button onClick={onClickFunction} className='btn'>{text}</button>
    )
}

export default Button;