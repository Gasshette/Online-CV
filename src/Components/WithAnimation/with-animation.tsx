import React from 'react';

const WithAnimation = ({ children, animation }: { children: React.ReactNode, animation: string }) => {
    return <div className={["with-animation-component", "animate__animated", animation].join(' ')}>{children}</div>
}

export default WithAnimation;