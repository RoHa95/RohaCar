import Link from "next/link";
import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />

      <div className=" min-h-[600px]"> {children}</div>
      <footer className=" bg-lime-50 text-gray-600 py-3 px-0 text-center">
        Developed by Roghaye Halimi
      </footer>
    </>
  );
}

export default Layout;
