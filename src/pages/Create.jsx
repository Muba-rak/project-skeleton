import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
// tag, description, title, image
//nature, lifestyle, sport, technology, others
const Create = () => {
  const { baseURL } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("tag", tag);
    formdata.append("description", description);
    formdata.append("image", image);
    const res = await axios.post(`${baseURL}/story`, formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleCreate}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tag">Tag</label>
          <select
            name=""
            id="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option value="">Select Tags</option>
            <option value="nature">Nature</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="sport">Sport</option>
            <option value="technology">Technology</option>
            <option value="others">Other Tag</option>
          </select>
        </div>
        <div>
          <label htmlFor="image">Upload Image</label>
          <input
            accept="image/*"
            type="file"
            placeholder="selce image"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="description"></label>
          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">{loading ? "creating..." : "Write story"}</button>
      </form>
    </div>
  );
};

export default Create;
