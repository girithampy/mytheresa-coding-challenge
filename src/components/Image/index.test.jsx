import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// Component
import Image from "./index";


describe('<Header />', () => {
    test('It should render Header', () => {
        render(<Image imageUrl='test.jpeg' />);
        expect(screen.getByTestId("image")).toBeInTheDocument();
    });
});