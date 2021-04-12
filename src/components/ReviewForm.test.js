import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ReviewForm from "./ReviewForm";

describe('ReviewForm', () => {
    let form;
    beforeEach(() => {
        render(<ReviewForm />);
    });

    it('should have a text area input', () => {
        const textArea = screen.getByRole("textbox");
        expect(textArea).toBeInTheDocument();
    });

    // it('should add a review to the document after submission', () => {
    //     const textArea = within(form).getByRole("textbox");
    //     const mockReview =  "This is my review"
    //     userEvent.type(textArea, `${mockReview}{enter}`);
    //     expect()
    // });

    it('should clear the form after submission', () => {

    });
});
