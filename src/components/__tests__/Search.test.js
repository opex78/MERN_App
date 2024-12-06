import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import { mock_restaurants } from "../../utils/constants"
import Body from "../Body"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(mock_restaurants)
        }
    })
})
it("Should render body component with search", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    // Query
    const searchButton = screen.getByTestId("searchButton")
    expect(searchButton).toBeInTheDocument()

    const searchInput = screen.getByTestId("searchInput")
    expect(searchInput).toBeInTheDocument()

    fireEvent.change(searchInput, { target: { value: "Chinese" } })
    fireEvent.click(searchButton)

    // screen 1 card
    const cards = screen.getAllByTestId("resCard")
    expect(cards.length).toBe(2)
})