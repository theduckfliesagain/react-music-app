import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import RefreshButton from ".";

describe('RefreshButton', () => {
    it('should call a passed prop when clicked', () => {
        const mockHandleClick = jest.fn();
        render(<RefreshButton handleClick={mockHandleClick}/>);
        const btn = screen.getByRole('button', {name: 'refresh'});
        userEvent.click(btn);
        expect(btn).toBeInTheDocument();
        expect(mockHandleClick).toHaveBeenCalledTimes(1);
    });
});