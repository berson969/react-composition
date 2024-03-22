import React, {ReactNode} from 'react';

const Links: React.FC<{children: ReactNode}> = ({ children}) => {
    return (
        <div className="my-12">
            <h1 className="text-blue-600 font-bold text-2xl mb-2">Посещаемое</h1>
            {children}
        </div>
    );
};

export default Links;