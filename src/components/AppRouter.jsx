import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => 
                <Route 
                    element={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
        </Routes>
    )
}

export default AppRouter