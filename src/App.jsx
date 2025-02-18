import { useState } from "react";
import styles from "./App.module.css";
import ButtonsConstainer from "./components/ButtonsContainer";
import Display from "./components/display";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.calculater}>
        <h1 className={styles.heading}>Calculator</h1>
        <Display displayValue={calVal}></Display>
        <ButtonsConstainer onButtonClick={onButtonClick}></ButtonsConstainer>
      </div>
    </div>
  );
}

export default App;
