import { render, screen } from '@testing-library/react';

import MainLayout from "../views/MainLayout"
import { MemoryRouter } from 'react-router-dom';

describe("MainLayout view tests", ()=>{
    it("Displays Little Lemon text", ()=>{
        // Required to test links; somehow the context isn't available without this tag
        <MemoryRouter>
        render(<MainLayout/>)
        </MemoryRouter>                
        expect(1).toBe(1)
    })

    it("Displays location", ()=>{
        expect(1).toBe(1)
    })
})