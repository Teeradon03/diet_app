import HeaderBar from "../layouts/headbar/Headerbar";
import { Box } from "@mui/material";
import SideBar from "../layouts/sidebar/Sidebar";

import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { currentAdmin } from "../functions/auth";
import NotFound404 from "../pages/404/NotFound404";

export default function AdminRoute({ children }) {
    const { user } = useSelector((state) => ({ ...state }))
    const [ok, setOk] = useState(false)
    // console.log('user in admin route', user.user.role)

    // Memoize the selector result
    const memoizedUser = useMemo(() => user, [user]);

    useEffect(() => {
        if (memoizedUser && memoizedUser.user.role) {
            currentAdmin(memoizedUser.user.role)
                .then((res) => {
                    console.log(res);
                    setOk(true);
                })
                .catch((error) => {
                    console.log(error);
                    setOk(false);
                });
        }
    }, [memoizedUser]);


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
