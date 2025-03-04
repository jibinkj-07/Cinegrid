/* eslint-disable react/prop-types */

import { CategoryProvider } from './CategoryProvider';
import { MoviesProvider } from './MoviesProvider';

const AppProviders = ({ children }) => {
    return (
        <CategoryProvider>
            <MoviesProvider>
                {children}
            </MoviesProvider>
        </CategoryProvider>
    );
};

export default AppProviders;