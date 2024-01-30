import react, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import { CssBaseline, Box } from "@mui/material";
import SideBar from "./SideBar";

import "./MainApp.css"

import Questionnaires from './questionnaires/Questionnaires';
import Users from './user/Users';
import QuestionReport from './question/Question';
import ContentMap from "./ContentMap";

function MainApp() {
  const [isSidebar, setIsSidebar] = useState(true);
  const [sidebarData, setSidebarData] = useState("");

  const updateSidebarData = (newData) => {
    setSidebarData(newData);
  };

  return (
    <>
      <CssBaseline />
      <div className="MainApp">
         <SideBar isSidebar={isSidebar} updateSidebarData={updateSidebarData} />
        <main className="contentBar">
          <HeaderBar setIsSidebar={setIsSidebar} />
          <div className="content_body">
            <Box m="20px">
                
                    {sidebarData === "ผู้ใช้งาน" && <Users/>}
                    {sidebarData === "แบบสอบถาม" && <Questionnaires/>}
                    {sidebarData === "คำถาม" && <QuestionReport/>}
              
            
            </Box>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainApp;