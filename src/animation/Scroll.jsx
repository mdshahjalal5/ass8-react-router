import * as motion from "motion/react-client";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function ScrollCard({ children, style }) {
  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingTop: 20,
        marginBottom: -120,
        ...style,
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
}
