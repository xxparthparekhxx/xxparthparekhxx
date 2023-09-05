import React, { useState } from "react";
import styles from "./styles.module.css";
import { ContactInputFactory } from "../../src/models";
import { createContact } from "../../src/api";

const Field = ({
  title,
  form = false,
  email = false,
  onChange,
}: {
  title: string;
  email?: boolean;
  form?: boolean;
  onChange: (e: string) => void;
}) => {
  const inputStyle = {
    padding: "10px",
    textSizeAdjust: "20em",
    border: " solid 1px #00ff41",
    width: "100%",
  };
  return (
    <div
      style={{
        padding: "13px",
      }}
    >
      <h2>{title}</h2>
      {form ? (
        <textarea
        
        onChange={(e) => onChange(e.target.value)}
          name=""
          id=""
          cols={60}
          rows={20}
          style={inputStyle}
        ></textarea>
      ) : (
        <input
          style={inputStyle}
          onChange={(e) => onChange(e.target.value)}
          type={email ? "email" : "text"}
        />
      )}
    </div>
  );
};

function ContactUs() {
  const formStyle = {
    padding: "30px",
    margin: "20px",
    border: "solid 1px  #00ff41 ",
    borderRadius: "10px",
    display: "flex",
    flexFlow: "column",
  };

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Reason, setReason] = useState("");

  return (
    <div>
      <form style={formStyle} onSubmit={async(e)=>{
        e.preventDefault();
        const contact =   ContactInputFactory(Name,Email,Reason)
        const created =  await createContact(contact)
        setEmail("");setName("");setReason("");
        console.log(created)
      }} method="post">
        <Field title="Name" onChange={setName} />
        <Field title="Email" email onChange={setEmail} />
        <Field title="Reason" form onChange={setReason} />
        <input
          style={{
            padding: "10px",
            margin: "13px",
            fontSize: "20px",
            color: "black",
            fontWeight: "bold",
            backgroundColor: "#00ff41",
          }}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default ContactUs;
