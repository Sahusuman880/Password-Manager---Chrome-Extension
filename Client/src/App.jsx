import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import axios from "axios";
import { FormContext } from "./Context/FormContext";
export const base_url = "http://localhost:3000/api/";
function App() {
  const [passwords, setPasswords] = useState([]);
  const [url, setUrl] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [editingId, setEditingId] = useState("");
  const getAllPasswords = async () => {
    const url = `${base_url}password/getpassword`;
    const data = await axios.get(url);
    if (data?.status == 200 && data?.data?.error == false) {
      setPasswords(data?.data?.result);
      console.log(data?.status, data?.data?.result);
    }
  };

  let value = {
    passwords,
    setPasswords,
    url,
    setUrl,
    userId,
    setUserId,
    password,
    setPassword,
    getAllPasswords,
    editingId,
    setEditingId,
  };

  useEffect(() => {
    getAllPasswords();
  }, []);
  return (
    <>
      <FormContext.Provider value={value}>
        <Home />
      </FormContext.Provider>
    </>
  );
}

export default App;
