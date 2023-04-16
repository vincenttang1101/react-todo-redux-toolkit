import styles from "./Button.module.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";

const checkVariants = {
  intial: {
    color: "##ff",
  },
  checked: {
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
  },
};

const boxVariant = {
  checked: {
    background: "var(--purple-700)",
    transition: { duration: 0.1 },
  },
  unchecked: {
    background: "var(--gray-300)",
    transition: {
      duration: 0.1,
    },
  },
};

export const CheckButton = ({ checked, handleCheck }) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  return (
    <motion.div
      className={styles.svgBox}
      variants={boxVariant}
      animate={checked ? "checked" : "unchecked"}
      onClick={handleCheck}
    >
      <motion.svg
        className={styles.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVariants}
          animate={checked ? "checked" : "unchecked"}
          style={{ pathLength, opacity }}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
};
