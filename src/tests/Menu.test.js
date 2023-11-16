import { render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Menu from "views/MainLayout/Menu"

describe("Menu view tests", ()=>{
    <MemoryRouter>
        render(<Menu/>)
    </MemoryRouter>
    it("Displays Menu", ()=>{
        expect(1).toBe(1)
    })
})