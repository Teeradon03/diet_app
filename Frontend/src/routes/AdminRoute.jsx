import HeaderBar from "../pages/report/HeaderBar";
import { Box } from "@mui/material";
import SideBar from "../pages/report/SideBar";
import { Routes, Route } from "react-router-dom";


export default function AdminRoute({ children }) {
    return (
        <>
            <div className="MainApp">
                <SideBar />
                <main className="contentBar">
                    <HeaderBar />
                    <div className="content_body">
                        <Box m="20px">
                            {children}
                        </Box>
                    </div>
                </main>
            </div>
        </>
    )
}
