import React from "react";
import { Outlet } from "react-router-dom";
import ClientHeader from "../../components/Client/Header";
import ClientFooter from "../../components/Client/Footer";

const ClientLayout = () => {
  return (
    <>
      <ClientHeader />
      <Outlet />
      <ClientFooter />
    </>
  );
};

export default ClientLayout;
