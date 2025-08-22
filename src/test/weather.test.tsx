import { afterEach, describe, it } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Weather from "../Components/WeatherDesktop";

describe('Weather', ()=> {
    afterEach(cleanup)

    it('should render the desktop weather component', () => {
        render(<Weather/>)
    })

})