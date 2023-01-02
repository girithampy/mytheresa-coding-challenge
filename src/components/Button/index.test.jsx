import { act, render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
// Component
import Button from "./index";


describe('<Button />', () => {
    test('It should render Button', () => {
        render(<Button text="test"/>);
        expect(screen.getByTestId("button")).toBeInTheDocument();
    });
    test('It should renders text, preIcon and trigger action as expected', async () => {
        const mockCallBack = jest.fn();
        render(<Button text="test" preIcon={'test'} onClick={mockCallBack}/>);
        expect(screen.getByText(`test`)).toBeInTheDocument();
        await act(() => {
            screen.getByTestId("button").click();
        })
        expect(mockCallBack.mock.calls.length).toEqual(1);
        expect(screen.getByRole("img").getAttribute('src')).toEqual('test');
    });
});