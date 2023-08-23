import React, { useState } from "react";
import NoImageSelected from "../../assets/no-image-selected.jpg";

function createAlbum() {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [stars, setStars] = useState(0);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [submitted, setSubmitted] = useState("");
  const [image, setImage] = useState(NoImageSelected)

  const createAlbum = async (e) => {
    e.preventDefault();
    console.table([title, slug]);


    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("stars", stars);
    formData.append("description", description);
    formData.append("category", categories);
    formData.append("thumbnail", thumbnail);

    try {

      const response = await fetch(`${serverUrl}/api/albums`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setTitle("");
        setSlug("");
        setSubmitted(true);
      } else {
        console.log("Failed to submit data.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryChange = (e) => {
    setCategories(e.target.value.split(",").map((category) => category.trim()));
  }


  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setThumbnail(e.target.files[0]);
    }
  }

  return (
    <div>
      <h1>Create Album</h1>
      <p>
        Let me know if you heard something recently that you just can't stop listening to! Remember to add the artist's name in the title field and the album name in the slug field. Thank you!! 🙏
      </p>

      {submitted ? (
        <p>Data subitted successfully!</p>
      ) : (
        <form className="albumdetails" onSubmit={createAlbum}>
          <div className="col-1">
            <label>Upload Thumbnail</label>
            <img src={image} alt="preview image" />
            <input 
            onChange={onImageChange}
            type="file" accept="image/gif, image/jpeg, image/png" />
          </div>
          <div className="col-2">
            <div>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label>Slug 🐌</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
            
            <div>
              <label>Stars</label>
              <input
                type="text"
                value={stars}
                onChange={(e) => setStars(e.target.value)}
              />
            </div>

            <div>
              <label>Description</label>
              <textarea
                rows="4"
                cols="50"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <label>Genre/Genres (use "/" for multiple genres)</label>
              <input
                type="text"
                value={categories}
                onChange={handleCategoryChange}
              />
            </div>

            <input type="submit" />
          </div>
        </form>
      )}
    </div>
  );
}

export default createAlbum;