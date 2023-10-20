import React from "react";

export default function ThankYou({ name, query }) {
  return (
    <>
      <center>
        <h1 style={{ fontFamily: "Rockwell", color: "#32013d", fontSize: 30 }}>Thank You</h1>
        <p>Thank you for contacting us, {name}.</p>
        <p>This is your query: {query}</p>
      </center>
    </>
  );
}