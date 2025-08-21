import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)"},
};
const TabButton = ({ active, selectTab, children }) => {
  const buttonClassess = active? "text-white" : "text-[#ADB7BE]";
  return (
    <button 
      type="button" 
      onClick={selectTab} 
      className="relative px-2 font-semibold"
    >
      <span className={active ? "text-white" : "text-[#ADB7BE] hover:text-white"}>
        {children}
      </span>
      <motion.div
        layoutId="underline"
        className="h-1 bg-purple-400 mt-2 mr-3"
        animate={ active ? "active" : "default" }
        variants={variants}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default TabButton;
