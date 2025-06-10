import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
  