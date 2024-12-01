import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact us page test cases", () => {
    it("should render heading inside contact page", () => {
        render(<Contact />)

        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
    })

    it("should load input name inside contact component", () => {
        render(<Contact />)
        const inputName = screen.getByPlaceholderText("message");
        expect(inputName).toBeInTheDocument();
    })

    it("should load 1 textbox inside contact component", () => {
        render(<Contact />)

        const textBoxes = screen.getAllByRole("textbox")
        expect(textBoxes.length).toBe(1)
    })
})
