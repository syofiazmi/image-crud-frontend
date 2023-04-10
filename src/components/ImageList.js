import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const response = await axios.get("http://localhost:5000/images");
    setImages(response.data);
  };

  const deleteImage = async (imageId) => {
    try {
      await axios.delete(`http://localhost:5000/images/${imageId}`);
      getImage();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/add" className="button is-success">
        Add New
      </Link>
      <div className="columns is-multiline mt-5">
        {images.map((image) => (
          <div className="column is-one-quarter" key={image.id}>
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={image.url} alt="image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{image.name}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`edit/${image.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteImage(image.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
