/* eslint-disable react/prop-types */

import { CategoryProvider } from './CategoryProvider';
import { MoviesProvider } from './MoviesProvider';
import { ScrollProvider } from './ScrollProvider';

const AppProviders = ({ children }) => {
    return (
        <CategoryProvider>
            <ScrollProvider>
                <MoviesProvider>
                    {children}
                </MoviesProvider>
            </ScrollProvider>
        </CategoryProvider>
    );
};

export default AppProviders;