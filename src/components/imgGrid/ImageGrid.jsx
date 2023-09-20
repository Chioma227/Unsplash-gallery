import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Header from "../header/Header";
import NotFound from "../404/NotFound";
import Loader from "../loader/Loader";
import axios from "axios";
import Draggable from "./Drag";
import MyFooter from "../404/Footer";
import Message from "../Message";

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=f9TFFPeJZmln_tQObHSBJdO9ubWYFoqxstYxQ9ilO4g"
      );
      const data = await response.data;
      setImages(data);
      setIsLoading(false);
      setFilteredImages(data);
    } catch (error) {
      setIsLoading(false);
      setMessage(error.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const filtered = images.filter((image) =>
    image.alt_description.toLowerCase().includes(searchQuery)
  );

  const handleImageDrop = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    dragItem.current = null;
    dragOverItem.current = null;
    setImages(updatedImages);
  };

  return (
    <div>
      <Header
        handleSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {message ? (
            <Message message={message} />
          ) : (
            <div>
              {filtered.length === 0 ? (
                <NotFound />
              ) : (
                <div className="grid lg:grid-cols-4 sm:grid-cols-3  mt-[30px] mb-[90px]  gap-[15px] sm:px-0 px-[9px]">
                  {filtered.map((image, index) => (
                    <Draggable
                      dragItem={dragItem}
                      dragOverItem={dragOverItem}
                      key={image.id}
                      image={image}
                      onImageDrop={handleImageDrop}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <MyFooter />
    </div>
  );
}

export default ImageGallery;
