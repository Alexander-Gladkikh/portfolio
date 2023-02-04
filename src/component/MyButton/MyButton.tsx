import React from 'react';

const MyButton: React.FC<any> = ({children, ...props}) => {
    return (
        <button>
            <span>{children}</span>
        </button>
    );
};

export default MyButton;