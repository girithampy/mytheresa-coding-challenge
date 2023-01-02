import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom';

import rootReducer from '../store/reducer'

export function renderWithProviders(ui,
    {
        preloadedState = {},
        renderWithRouter = false,
        // Automatically create a store instance if no store was passed in
        store = configureStore({ reducer: rootReducer, preloadedState }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return renderWithRouter ? <Provider store={store}><Router>{children}</Router></Provider>:<Provider store={store}>{children}</Provider>
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}


export function renderWithRouter(ui) {
    function Wrapper({ children }) {
        return <Router>{children}</Router>;
    }

    // Return an object with the store and all of RTL's query functions
    return render(ui, { wrapper: Wrapper });
}