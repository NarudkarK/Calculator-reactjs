import styles from "./ButtonContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "=",
    "1",
    "2",
    "3",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsConstainer}>
      {buttonNames.map((item, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => onButtonClick(item)}
          aria-label={`Button ${item}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
