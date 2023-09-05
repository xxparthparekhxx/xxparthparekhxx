import React from "react";
import { Navbar } from "../components/NavBar/Navbar";
import MaterialInput from "../components/common/MaterialInput";

const Contact = () => {

  return (
    <Navbar>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
        <div>
        <MaterialInput></MaterialInput>
        </div>


      </div>
    </Navbar>
  );
};

export default Contact;
