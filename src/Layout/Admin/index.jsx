import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/Header";
import AdminFooter from "../../components/Admin/Footer";
import AdminSidebar from "../../components/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <AdminSidebar/>
      <Outlet />
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
