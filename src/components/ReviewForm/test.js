import React from 'react';
import { screen, render,  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ReviewForm from ".";

describe('ReviewForm', () => {
    beforeEach(() => {
        render(<ReviewForm />);
    });

    it('should have a text area input', () => {
        const textArea = screen.getByRole("textbox");
        expect(textArea).toBeInTheDocument();
    });

    it('should add a review to the document after submission', () => {
        const textArea = screen.getByRole("textbox");
        const mockReview =  "This is my review"
        userEvent.type(textArea, `${mockReview}{enter}`);
        const review = screen.getByRole("comment");
        expect(review).toHaveTextContent(mockReview);
    });

    // it('should clear the form after submission', () => {

    // });
});
