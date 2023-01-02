import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// test-utils
import { renderWithProviders } from "../../utils/test-utils";
// Component
import Header from "./index";


describe('<Header />', () => {
    let preloadedState;
    beforeEach(() => {
        preloadedState = {
            app : {
                openSidebar: false,
                myWishlist : [{
                    name : 'test'
                }]
            }
        }
    })
    test('It should render Header', () => {
        renderWithProviders(<Header />, { preloadedState, renderWithRouter : true });
        expect(screen.getByTestId("header")).toBeInTheDocument();
    });
    test('It should render wishlist button with count', () => {
        renderWithProviders(<Header />, { preloadedState, renderWithRouter : true });
        expect(screen.getByText(`My Wishlist(${preloadedState.app.myWishlist.length})`)).toBeInTheDocument();
    });
});