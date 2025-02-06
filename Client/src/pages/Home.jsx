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
          position: "absolute",
          width: "40vw",
          height: "100%",
          right: 0,
          fontSize: "18px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div>
          <h1>Suman's Password Manager</h1>
        </div>
        <AddPassword />
        <RenderPasswords />
      </div>
    </>
  );
}

export default Home;
