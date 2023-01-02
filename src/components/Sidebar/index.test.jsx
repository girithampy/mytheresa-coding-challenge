import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// test-utils
import { renderWithProviders } from "../../utils/test-utils";
// Component
import Sidebar from "./index";


describe('<Sidebar />', () => {
    let preloadedState;
    beforeEach(() => {
        preloadedState = {
            app : {
                openSidebar: false,
                myWishlist : []
            }
        }
    })
    test('It should render Sidebar', () => {
        renderWithProviders(<Sidebar />, { preloadedState });
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test('It should render empty text when wishlist is empty', () => {
        renderWithProviders(<Sidebar />, { preloadedState });
        expect(screen.getByText(`Your wishlist is empty!`)).toBeInTheDocument();
    });
});