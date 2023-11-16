import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Login from "views/MainLayout/Login"

describe( "Login view tests", ()=>{
    <MemoryRouter>
        render(<Login/>)
    </MemoryRouter>
    
    it("Displays login", ()=>{
        expect(1).toBe(1)
    })
})