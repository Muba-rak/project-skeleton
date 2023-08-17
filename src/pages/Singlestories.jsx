import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Singlestories = () => {
  const { storyId } = useParams();
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getStory = async () => {
    const {
      data: { story },
    } = await axios(`${baseURL}/all/${storyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    console.log(story);
    setTag(story.tag);
    setDescription(story.description);
    setImage(story.image);
    setTitle(story.title);
  };
  useEffect(() => {
    getStory();
  }, [storyId]);
  return (
    <div>
      <p> {tag}</p>
      <p>{description} </p>
      <p>{title} </p>
      <img src={image} alt="" />
    </div>
  );
};

export default Singlestories;
