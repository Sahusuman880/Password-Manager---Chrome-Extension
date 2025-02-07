import axios from "axios";
import React, { useContext, useState } from "react";
import { FormContext } from "../Context/FormContext";

function AddPassword() {
  const {
    url,
    setUrl,
    userId,
    setUserId,
    password,
    setPassword,
    getAllPasswords,
    editingId,
    setEditingId,
  } = useContext(FormContext);
  const base_url = "http://localhost:3000/api/";

  const addPassword = async () => {
    const url1 = `http://localhost:3000/api/password/addpassword`;
    let obj = {
      id: editingId == "" ? null : editingId,
      url,
      userid: userId,
      password,
    };
    const data = await axios.post(url1, obj, {
      headers: { "Content-Type": "application/json" },
    });
    setUrl("");
    setUserId("");
    setPassword("");
    getAllPasswords();
    setEditingId("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(url, userId, password);
    addPassword();
  };

  const handleReset = () => {
    setUrl("");
    setUserId("");
    setPassword("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          marginBottom: "11px",
        }}
      >
        <label htmlFor="website">Website:</label>
        <input
          id="website"
          style={{
            height: "35px",
            width: "100%",
            paddingLeft: "10px",
            border: "2px solid red",
            borderRadius: "5px",
            color: "white",
          }}
          type="text"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="userid">User ID</label>
        <input
          id="userid"
          style={{
            height: "35px",
            width: "100%",
            paddingLeft: "10px",
            border: "2px solid red",
            borderRadius: "5px",
            color: "white",
          }}
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="password">Password</label>
        <input
          id="password"
          style={{
            height: "35px",
            width: "100%",
            paddingLeft: "10px",
            border: "2px solid red",
            borderRadius: "5px",
            color: "white",
          }}
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "red",
            height: "30px",
            width: "80px",
          }}
          type="submit"
        >
          Save
        </button>
        <button
          style={{
            backgroundColor: "red",
            height: "30px",
            width: "80px",
          }}
          type="reset"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default AddPassword;
