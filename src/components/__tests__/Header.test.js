import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"

describe("Header component test", () => {
    it("Should load header component with login button", () => {
        // render
        render(
            <BrowserRouter><Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>)

        // query
        const loginButton = screen.getByRole("button", { name: "Login" });

        // assert
        expect(loginButton).toBeInTheDocument()
    })

    it("Should click on Login button and text should be change to Logout", () => {
        // render
        render(
            <BrowserRouter><Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>)
        // query
        const loginButton = screen.getByRole("button", { value: "Login" });

        // assert
        expect(loginButton).toBeInTheDocument()

        fireEvent.click(loginButton)

        const logoutButton = screen.getByRole("button", { value: "Logout" });
        expect(logoutButton).toBeInTheDocument()
        expect(screen.queryByRole("button", { name: "Login" })).not.toBeInTheDocument()
    })
})
