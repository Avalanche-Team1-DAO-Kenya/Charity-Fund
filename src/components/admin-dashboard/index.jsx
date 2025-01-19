import React from "react";
import CourseDetails from "../cause-details";
import { Header46 } from "./components/Header46";
import { Layout4 } from "./components/Layout4";
import { Layout192 } from "./components/Layout192";
import { Layout3 } from "./components/Layout3";
import { Layout12 } from "./components/Layout12";
import { Layout89 } from "./components/Layout89";
import { Layout4_1 } from "./components/Layout4_1";
import AdminHome from "./components/LandinPage";

export default function Dashboard() {
  
  return (
    <div className="flex flex-col space-x-4">
      <AdminHome/>     
      <Layout3 />
      <Layout12 />
      <Layout89 />
      <Layout4_1 />
    </div>
  );
}
