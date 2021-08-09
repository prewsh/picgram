import React from 'react';
import useFirestore from "../hooks/useFirestore";
import { motion } from 'framer-motion'


const ImageGrid = ({ setSelectedImg }) =>{
    const {docs} = useFirestore('images')
    console.log(docs)
    return(
        <div className="img-grid">
            {docs && docs.map(doc =>(
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{ scale: 1.1, opacity: 1.3 }}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img 

                    src={doc.url} alt="uploaded image"
                    initial={{ opacity: 0}}
                    transition={{delay: 1}}
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        // rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["3%", "3%", "10%", "10%", "3%"],
                        opacity: 1
                        }}
                    
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;