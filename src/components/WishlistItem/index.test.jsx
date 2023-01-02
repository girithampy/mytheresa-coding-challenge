import { act, render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
// Component
import WishlistItem from "./index";


describe('<WishlistItem />', () => {
    let preloadedProps;
    beforeEach(() => {
        preloadedProps = {
            id : 76600,
            poster_path : 'test.jpeg',
            original_title : 'title',
            release_date : '2023-02-01',
            runtime : 192,
            genres : [{ name : 'action' }],
            overview : 'test overiew',
        }
    })
    test('It should render WishlistItem', () => {
        render(<WishlistItem movie={preloadedProps}/>);
        expect(screen.getByTestId("wishlist-item")).toBeInTheDocument();
    });
    test('It should renders all texts as expected', async () => {
        render(<WishlistItem movie={preloadedProps}/>);
        expect(screen.getByText(preloadedProps.original_title)).toBeInTheDocument();
        expect(screen.getByText('2023')).toBeInTheDocument();
        expect(screen.getByText('action')).toBeInTheDocument();
        expect(screen.getByText(preloadedProps.overview)).toBeInTheDocument();
    });
});