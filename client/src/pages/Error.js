import React from "react";
import Frame from "../components/Frame";
import Button from "../components/Button";
import { motion } from "framer-motion";

function Error() {
  return (
    <motion.div initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}>
      <Frame h1="ERROR" h2="404: URL NOT FOUND" />
      <Button path="/" label="Return"/>
    </motion.div>
  );
}

export default Error;