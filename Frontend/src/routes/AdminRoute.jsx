import HeaderBar from "../layouts/headbar/Headerbar";
import { Box } from "@mui/material";
import SideBar from "../layouts/sidebar/Sidebar";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { currentAdmin } from "../functions/auth";
import NotFound404 from "../pages/404/NotFound404";

export default function AdminRoute({ children }) {

    
    const { user } = useSelector((state) => ({ ...state }))
    const [ok, setOk] = useState(false)

    useEffect(() => {
        if (user && user.user.role) {
            currentAdmin(user.user.userId)
                .then((res) => {
                    // console.log(res);
                    setOk(true);
                })
                .catch((error) => { 
                    // console.log(error);
                    setOk(false);
                });
        }
    }, [user]);


    return ok ? (
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
        :
        <NotFound404 />
}
