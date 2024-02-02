import react, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderBar from "../../../layouts/headbar/Headerbar";
import { CssBaseline, Box } from "@mui/material";
import SideBar from "../../../layouts/sidebar/Sidebar";

import "./MainApp.css"

import Questionnaires from './questionnaires/Questionnaires';
import Users from './user/Users';
import QuestionReport from './question/Question';


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