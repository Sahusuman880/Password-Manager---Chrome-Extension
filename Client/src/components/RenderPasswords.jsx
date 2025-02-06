import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import axios from "axios";

function RenderPasswords({ passwords, getAllPasswords }) {
  const [toggle, setToggle] = useState(true);
  const handleDelete = async (id) => {
    console.log("id-->", id);
    const url = `http://localhost:3000/api/password/deletepassword/${id}`;
    const data = await axios.delete(url, {
      headers: { "Content-Type": "application/json" },
    });
    getAllPasswords();
  };
  return (
    <div
      id="scroll"
      style={{
        height: "60vh",
        overflow: passwords?.length > 10 ? "scroll" : "hidden",
      }}
    >
      <h3 style={{ textAlign: "center" }}>All Saves Password</h3>
      {passwords?.map((e) => {
        return (
          <div
            style={{
              width: "30vw",
              height: "30px",
              // border: "2px solid white",
              display: "flex",
              marginBottom: "2px",
            }}
          >
            <div
              style={{
                width: "33%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {e?.url}
            </div>
            <div
              style={{
                width: "33%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {e?.userid}
            </div>
            <div
              style={{
                width: "33%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {toggle ? "**********" : e?.password}
            </div>
            <>
              {toggle ? (
                <button onClick={() => setToggle(false)}>
                  <BiShowAlt />
                </button>
              ) : (
                <button onClick={() => setToggle(true)}>
                  <BiHide />
                </button>
              )}
            </>
            <button
              style={{ marginLeft: "2px" }}
              onClick={() => setEditedObj(e)}
            >
              <FiEdit />
            </button>
            <button
              style={{ marginLeft: "2px" }}
              onClick={() => handleDelete(e?._id)}
            >
              <RiDeleteBinLine />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default RenderPasswords;
