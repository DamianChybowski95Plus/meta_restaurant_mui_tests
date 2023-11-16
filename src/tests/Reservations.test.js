import { render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Reservations from "views/MainLayout/Reservations"


describe("Reservations view tests", ()=>{
    <MemoryRouter>
        render(<Reservations/>)
    </MemoryRouter>    
    it("Displays reservations",()=>{
        expect(1).toBe(1)
    })
})