import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Welcome = () => {
  const { baseURL } = useGlobalContext();
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");
  const getUser = async () => {
    const { data } = await axios(`${baseURL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(data.username);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Navbar t3={"Logout"} />
      <div>
        <h3>Welcome {user} </h3>
      </div>
      <Link to="/mystories">
        <button>MY STORIES</button>
      </Link>
      <Link to="/allstories">
        <button>GO TO FEED</button>
      </Link>
    </div>
  );
};

export default Welcome;
