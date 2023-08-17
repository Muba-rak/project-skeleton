import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Mystories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getStories = async () => {
    setLoading(true);
    const {
      data: { stories },
    } = await axios(`${baseURL}/story`, {
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

  const handleDelete = async (id) => {
    const { data } = await axios.delete(`${baseURL}/story/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.success) {
      window.location.reload();
    }
  };
  return (
    <div>
      <div>
        <h1>My stories</h1>
        <button>
          <Link to="/create">Write Stroey</Link>
        </button>
      </div>

      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {stories.map((s) => {
              const {
                _id,

                description,
                title,
              } = s;
              return (
                <div key={_id} className="border border-danger">
                  <p>{title} </p>

                  <p>{description} </p>
                  <Link to={`/edit/${_id}`}>
                    <button>Edit Story</button>
                  </Link>
                  <button onClick={() => handleDelete(_id)}>Delete</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mystories;
