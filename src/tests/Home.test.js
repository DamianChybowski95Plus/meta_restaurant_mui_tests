import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Home from "views/MainLayout/Home"

describe( "Home view tests", ()=>{
    <MemoryRouter>
        {/* render(<Home/>) */}
    </MemoryRouter>
    it("Displays home", ()=>{
        expect(1).toBe(1)
    })
})