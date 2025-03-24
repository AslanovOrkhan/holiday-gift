import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/Header";
import AdminFooter from "../../components/Admin/Footer";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
