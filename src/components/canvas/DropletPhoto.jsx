import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';


const WaterText = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 400); // بعد از شوک، برمی‌گرده به حالت morph
      };


  return (
    
    <motion.div
    onClick={handleClick}
    className={`absolute bottom-8 right-8 shadow-custom cursor-pointer ${clicked ? 'animate-shock' : 'animate-morph hover:animate-morphFast transition-all duration-500 w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] '}`}
    animate={{ y: [0, -1, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    style={{
        backgroundImage: `url("/src/assets/IMG-20231226-WA0064.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '80%',
    }}
    >
    <motion.div
        className=" relative left-24 top-20 h-7 w-7 animate-morph bg-white "
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
    />
    <motion.div
        className="absolute left-32 top-14 h-3 w-3 animate-morph bg-white"
        animate={{ y: [0, -1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
    />
    <motion.div
        className="absolute top-3/4 h-20 w-20 animate-morph shadow-customTwo"
        animate={{ y: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
    />
    </motion.div>
  );
};

export default WaterText;
