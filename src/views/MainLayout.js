import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function MainLayout(){
    return(
        <>
            <Typography level="title-md">Main Layout</Typography>
            <Outlet/>
        </>
    )
}