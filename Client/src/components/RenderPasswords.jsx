import React, { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import axios from "axios";
import { FormContext } from "../Context/FormContext";

function RenderPasswords() {
  const [toggle, setToggle] = useState(true);
  const {
    passwords,
    getAllPasswords,
    setUrl,
    setUserId,
    setPassword,
    setEditingId,
  } = useContext(FormContext);
  const handleDelete = async (id) => {
    console.log("id-->", id);
    const url = `http://localhost:3000/api/password/deletepassword/${id}`;
    const data = await axios.delete(url, {
      headers: { "Content-Type": "application/json" },
    });
    getAllPasswords();
  };

  const handleEdit = (e) => {
    setUrl(e?.url);
    setUserId(e?.userid);
    setPassword(e?.password);
    setEditingId(e?._id);
  };
  return (
    <div
      id="scroll"
      style={{ color: "white" }}
      // style={{
      //   height: "60vh",
      //   overflow: passwords?.length > 10 ? "scroll" : "hidden",
      // }}
    >
      <h3 style={{ textAlign: "center", margin: "5px 0px" }}>
        All Saves Password
      </h3>
      {passwords?.map((e) => {
        return (
          <div
            style={{
              // border: "2px solid white",
              display: "flex",
              marginBottom: "2px",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {e?.url}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {e?.userid}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {toggle ? "**********" : e?.password}
            </div>
            <>
              {toggle ? (
                <button
                  onClick={() => setToggle(false)}
                  style={{
                    color: "white",
                    border: "1px solid white",
                    width: "5%",
                  }}
                >
                  <BiShowAlt />
                </button>
              ) : (
                <button
                  onClick={() => setToggle(true)}
                  style={{
                    color: "white",
                    border: "1px solid white",
                    width: "5%",
                  }}
                >
                  <BiHide />
                </button>
              )}
            </>
            <button
              style={{
                marginLeft: "2px",
                color: "white",
                border: "1px solid white",
                width: "5%",
              }}
              onClick={() => handleEdit(e)}
            >
              <FiEdit />
            </button>
            <button
              style={{
                marginLeft: "2px",
                color: "white",
                border: "1px solid white",
                width: "5%",
              }}
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
