import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { useRef } from "react";
import Header from "../header/Header";
import NotFound from "../404/NotFound";
import Loader from "../loader/Loader";
import axios from "axios";

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

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

    const filtered = images.filter((image) =>
      image.alt_description.toLowerCase().includes(query)
    );
    setFilteredImages(filtered);
  };

  const dragImage = useRef();
  const dragOverImage = useRef();

  const dragStart = (e, position) => {
    dragImage.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverImage.current = position;
    console.log(dragOverImage);
  };

  const drop = () => {
    const copyImageItems = [...images];
    const dragImageContent = copyImageItems[dragImage.current];
    copyImageItems.splice(dragImage.current, 1);
    copyImageItems.splice(dragOverImage.current, 0, dragImageContent);
    setImages(copyImageItems);
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
            <div>{message}</div>
          ) : (
            <div>
              {filteredImages.length === 0 ? (
                <NotFound />
              ) : (
                <div className="grid lg:grid-cols-4 sm:grid-cols-3  mt-[30px]  gap-[9px]">
                  {filteredImages.map((image, index) => (
                    <div
                      onDragStart={(e) => dragStart(e, index)}
                      onDragEnter={(e) => dragEnter(e, index)}
                      onDragEnd={drop}
                      key={image.id}
                      draggable
                      className="w-[100%] shadow-xl md:h-[450px] sm:h-[300px] max-w-[100%] relative pb-[75%]"
                    >
                      <img
                        src={image.urls.small}
                        alt={image.tag}
                        className="absolute object-cover h-[100%] w-[100%]"
                      />
                      <div className="absolute bottom-0 backdrop-brightness-50 backdrop-blur-sm w-[100%] px-[15px] sm:h-[70px] h-[50px] flex items-center justify-center">
                        <p className=" text-white sm:text-[17px] text-[16px]">
                          {image.alt_description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
