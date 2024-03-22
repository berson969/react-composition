import React, {ReactNode} from 'react';

const Broadcast: React.FC<{children: ReactNode}> = ({ children }) => {
    return (
        <div>
            <h1 className="text-blue-600 font-bold text-2xl mb-2">Эфир</h1>
            {children}
        </div>
    );
};

export default Broadcast;