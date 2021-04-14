import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BackButton from ".";

describe('BackButton', () => {
    beforeEach(() => {
        render(<BackButton />, {wrapper: MemoryRouter});
    });

    it('should render a back button', () => {
        const btn = screen.getByRole('button', {name: 'back'});
        expect(btn).toBeInTheDocument();
    });
});