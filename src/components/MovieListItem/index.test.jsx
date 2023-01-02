import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// test-utils
import { renderWithRouter } from "../../utils/test-utils";
// Component
import MovieListItem from "./index";


describe('<MovieListItem />', () => {
    let preloadedProps;
    beforeEach(() => {
        preloadedProps = {
            id : 76600,
            backdrop_path : 'test.jpeg',
            original_title : 'title',
            release_date : '02-01-2023',
        }
    })
    test('It should render Header', () => {
        renderWithRouter(<MovieListItem movie={preloadedProps} />);
        expect(screen.getByTestId("movie-list-item")).toBeInTheDocument();
    });
    test('It should render all texts', () => {
        renderWithRouter(<MovieListItem movie={preloadedProps} designVariant="v1" />);
        expect(screen.getByText(`${preloadedProps.original_title}`)).toBeInTheDocument();
        expect(screen.getByText(`Released on ${preloadedProps.release_date}`)).toBeInTheDocument();
        expect(screen.getByRole("img").getAttribute('src')).toContain(preloadedProps.backdrop_path);
        expect(screen.getByRole("a").getAttribute('href')).toEqual(`/${preloadedProps.id}?designVariant=v1`);
    });
});