import { useDrag, useDrop } from "react-dnd";
import { motion } from "framer-motion";

const Draggable = ({ image, index, onImageDrop, dragItem, dragOverItem }) => {
  const [, ref] = useDrag({
    type: "IMAGE",
    item: {type:"IMAGE", index },
  });

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover: (draggedItem, monitor) => {
      if (draggedItem.index !== index) {
        onImageDrop(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <motion.div
      layout
      ref={(node) => ref(drop(node))}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[100%] shadow-xl md:h-[450px] sm:h-[300px] max-w-[100%] relative pb-[75%]"
    >
      <img
        src={image.urls.small}
        alt={image.tag}
        className="absolute object-cover h-[100%] w-[100%] rounded-md"
      />
      <div className="absolute bottom-0 backdrop-brightness-50 backdrop-blur-sm w-[100%] px-[15px] sm:h-[70px] h-[50px] flex items-center justify-center">
        <p className=" text-white sm:text-[17px] text-[16px]">
          {image.alt_description}
        </p>
      </div>
    </motion.div>
  );
};

export default Draggable;
