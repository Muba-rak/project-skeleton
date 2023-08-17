import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const Allstories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getStories = async () => {
    setLoading(true);
    const {
      data: { stories },
    } = await axios(`${baseURL}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setStories(stories);
    console.log(stories);
  };
  useEffect(() => {
    getStories();
  }, []);
  return (
    <div>
      <div>
        <h1>Youve got a story</h1>
      </div>
      <div className="d-flex flex-wrap ">
        {loading
          ? "Loading..."
          : stories.map((s) => {
              const {
                _id,
                image,
                description,
                title,
                createdAt,
                tag,
                createdBy: { username },
              } = s;
              return (
                <div key={_id} className="border border-danger">
                  <img src={image} alt="" width={"250px"} height={"250px"} />
                  <p>{title} </p>
                  <p>{tag}</p>
                  <p>{description} </p>
                  <p>By {username}</p>
                  <p>{new Date(createdAt).toDateString()} </p>
                  <Link to={`/single/${_id}`}>Read More</Link>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Allstories;
