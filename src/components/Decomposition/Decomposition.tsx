import React, {useEffect} from 'react';
import YandexPage from "./YandexPage.tsx";

export const Decomposition: React.FC = () => {
    useEffect(() => {
        document.title = 'Декомпозиция';
    }, []);

    return (
        <YandexPage />
    );
};