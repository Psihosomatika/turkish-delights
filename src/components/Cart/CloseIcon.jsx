import styles from "./CloseIcon.module.css";
const CloseIcon = () => {
  return (
    <svg
      className={styles.icon}
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m14.41 3.27-.82-.94L8 7.17 2.41 2.33l-.82.94L7.05 8l-5.46 4.73.82.94L8 8.83l5.59 4.84.82-.94L8.95 8l5.46-4.73z" />
    </svg>
  );
};
export default CloseIcon;
