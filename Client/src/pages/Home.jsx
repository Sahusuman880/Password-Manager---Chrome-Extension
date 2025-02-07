import React, { useState } from "react";
import AddPassword from "../components/AddPassword";
import RenderPasswords from "../components/RenderPasswords";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "18px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Suman's Password Manager</h1>

        <AddPassword />
        <RenderPasswords />
      </div>
    </>
  );
}

export default Home;
