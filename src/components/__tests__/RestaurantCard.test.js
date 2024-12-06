import { render, screen } from "@testing-library/react";
import { mock_restaurants } from "../../utils/constants"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"


it("Should render Restaurant Card with props", () => {
    const restaurant = mock_restaurants[0];
    render(<RestaurantCard
        name={restaurant.info.name}
        cuisines={restaurant.info.cuisines.join("")}
        ratings={`${restaurant.info.avgRatingString} stars`}
        deliveryTime={restaurant.info.sla.deliveryTime}
        cloudinaryId={restaurant.info.cloudinaryImageId} />)

    // Query
    const cardName = screen.getByText("Manekchowk Sandwich & Pizza")

    // Assert
    expect(cardName).toBeInTheDocument()
})