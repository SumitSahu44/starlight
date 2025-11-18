import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2.8, duration: 1, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full bg-[#0B1020] flex items-center justify-center z-[9999]"
    >

      <div className="flex items-center gap-6">

        {/* LEFT — LOGO */}
        <motion.img
          src="/images/SS logo- High Size.png"
          alt="Logo"
          className="h-20 w-auto"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* CENTER LINE */}
        <motion.div
          className="w-[2px] h-24 bg-white/40"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* RIGHT — TAGLINE ANIMATION */}
        <div className="overflow-hidden text-white font-semibold text-3xl md:text-5xl uppercase">

          {/* 1: Stop Renting Power */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          >
            Stop Renting Power Own It!
          </motion.div>

          {/* 2: Own It! */}
          {/* <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
            className="text-[#FFD700] mt-1"
          >
            Own It!
          </motion.div> */}

        </div>

      </div>

    </motion.div>
  );
};

export default Preloader;
