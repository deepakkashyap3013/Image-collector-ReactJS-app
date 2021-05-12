import React from "react";
import useFireStore from "../Hooks/useFireStore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFireStore("images");
  //   console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
              whileHover={{ opacity: 1 }}
              layout
            >
              <motion.img
                src={doc.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
