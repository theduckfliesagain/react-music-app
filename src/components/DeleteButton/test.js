import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import DeleteButton from ".";

describe('DeleteButton', () => {
    it('should call a passed prop when clicked', () => {
        const mockHandleClick = jest.fn();
        render(<DeleteButton handleClick={mockHandleClick}/>);
        const btn = screen.getByRole('button', {name: 'delete'});
        userEvent.click(btn);
        expect(btn).toBeInTheDocument();
        expect(mockHandleClick).toHaveBeenCalledTimes(1);
    });
});