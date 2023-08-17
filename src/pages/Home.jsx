import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const obj = {
    success: true,
    stories: [
      {
        _id: "64db5bf2ff8d1e1e1f5e6fbc",
        title: "Is Food really important ?",
        description:
          "Research has shown that food is not important. However, nutrients from foods are essential for the body's development. ",
        tag: "others",
        image:
          "https://res.cloudinary.com/dlb8nbz13/image/upload/v1692097521/postit/tmp-1-1692097520305_w0pccm.png",
        createdBy: {
          _id: "64da164fb5e78328bb0c3f88",
          username: "testing",
          email: "testing@google.com",
          password:
            "$2a$10$5hwik5LLVMdAuWIEcuMEA.GyfPju8jaSt8xP4.UDiOLPzHn77RrFq",
          createdAt: "2023-08-14T11:55:59.346Z",
          updatedAt: "2023-08-14T11:55:59.346Z",
          __v: 0,
        },
        createdAt: "2023-08-15T10:52:54.118Z",
        __v: 0,
      },
    ],
  };

  return (
    <div>
      <Navbar t1={"Sign In"} t2={"Get started"} />
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
