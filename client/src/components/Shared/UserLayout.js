import React from "react";
import Navbar from "../Website/Navbar";

const UserLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className="p-5">{props.children}</div>
    </>
  );
};

export default UserLayout;
