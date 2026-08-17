import AuthNav from "@/components/AuthNav";
import React from "react";

const layout = ({ children }) => {
  return (
    <html lang="en" className="h-full antialiased hydrated">
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">
        <AuthNav />
        {children}
      </body>
    </html>
  );
};

export default layout;
