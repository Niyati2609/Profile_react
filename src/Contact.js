import React, { useState } from "react";
import ThankYou from "./Thanks"; // Import the ThankYou component

export default function Contact() {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <center>
        <h1 style={{ fontFamily: "Rockwell", color: "#32013d", fontSize: 30 }}>Contact Me</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /><br /><br />
            <input
              type="text"
              placeholder="Enter your query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            /><br /><br />
            <input type="submit" value="Submit" />
          </form>
        ) : (
          <ThankYou name={name} query={query} />
        )}
      </center>
    </>
  );
}
