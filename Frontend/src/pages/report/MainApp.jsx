import react, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import { CssBaseline, Box } from "@mui/material";
import SideBar from "./SideBar";
import "./MainApp.css"


function MainApp() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
      <CssBaseline />
      <div className="MainApp">
        <SideBar isSidebar={isSidebar} />
        <main className="contentBar">
          <HeaderBar setIsSidebar={setIsSidebar} />
          <div className="content_body">
            <Box m="20px">
              <Routes>
              </Routes>
            </Box>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainApp;