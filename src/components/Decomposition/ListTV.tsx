import React, {ReactNode} from 'react';

const ListTv: React.FC<{children: ReactNode}> = ({ children }) => {
    return (
        <div>
            <h1 className="text-blue-600 font-bold text-2xl mb-2">Телепрограмма</h1>
            <div className='flex flex-col'>
                {children}
            </div>
        </div>
    );
};

export default ListTv;